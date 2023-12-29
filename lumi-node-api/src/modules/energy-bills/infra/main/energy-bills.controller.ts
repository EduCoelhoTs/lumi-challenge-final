import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import {
  CompiledDataReturnedDTO,
  CreateEnergyBillDTO,
  EnergyBillSelectedFieldsDTO,
  MonthlyCompiledDataReturnedDTO,
} from '@energy-bills/infra/main/dtos';
import {
  createEnergyBillSummary,
  getAllEnergyBillsSeccesfulResponse,
  getAllEnergyBillsSummary,
  getCompiledDataEnergyBillSummary,
  getMonthlyCompiledDataEnergyBillSummary,
  monthlyCompiledDataSeccesfulResponse,
  seccesfulResponse,
} from '@energy-bills/infra/main/docs';
import {
  createEnergyBillUsecaseFactory,
  getAllEnergyBillsUsecaseFactory,
  getEnergyBillsCompiledDataByCustomerNumberUsecaseFactory,
  getMonthlyEnergyBillCompiledDataByCustomerNumberUsecaseFactory,
} from '@energy-bills/application/factories';
import { EnergyBill } from '@energy-bills/domain';
import { response400, response500 } from '@shared/docs';
import { GetAllEnergyBills } from '@energy-bills/application/usecases';
import { Response } from 'express';

@ApiTags('Energy Bills')
@Controller('energy-bills')
export class EnergyBillsController {
  @ApiOperation(createEnergyBillSummary)
  @ApiResponse(response400)
  @ApiResponse(response500)
  @HttpCode(HttpStatus.CREATED)
  @Post()
  public create(@Body() body: CreateEnergyBillDTO): Promise<void> {
    const usecase = createEnergyBillUsecaseFactory();

    return usecase.execute(body);
  }

  @ApiOperation(getAllEnergyBillsSummary)
  @ApiResponse(getAllEnergyBillsSeccesfulResponse)
  @ApiResponse(response500)
  @HttpCode(HttpStatus.OK)
  @Get()
  public async getAll(
    @Query() query: EnergyBillSelectedFieldsDTO,
  ): GetAllEnergyBills.Output {
    const usecase = getAllEnergyBillsUsecaseFactory();
    const input = {
      selectedFields: query?.selectedFields
        ? (query?.selectedFields.split(',') as (keyof EnergyBill.Interface)[])
        : null,
    };

    return usecase.execute(input);
  }

  @ApiOperation(getCompiledDataEnergyBillSummary)
  @ApiResponse(seccesfulResponse)
  @ApiResponse(response400)
  @ApiResponse(response500)
  @HttpCode(HttpStatus.OK)
  @Get('compiled-data')
  public async getEnergyBillsCompiledDataByCustomerNumber(
    @Query('customerNumber') customerNumber: string,
  ): Promise<CompiledDataReturnedDTO> {
    const usecase = getEnergyBillsCompiledDataByCustomerNumberUsecaseFactory();
    const result: CompiledDataReturnedDTO = await usecase.execute({
      customerNumber: String(customerNumber),
    });

    return result;
  }

  @ApiOperation(getMonthlyCompiledDataEnergyBillSummary)
  @ApiResponse(monthlyCompiledDataSeccesfulResponse)
  @ApiResponse(response400)
  @ApiResponse(response500)
  @HttpCode(HttpStatus.OK)
  @Get('monthly-compiled-data')
  public async getMonthlyEnergyBillCompiledDataByCustomerNumber(
    @Query('customerNumber') customerNumber: string,
  ): Promise<MonthlyCompiledDataReturnedDTO[]> {
    const usecase =
      getMonthlyEnergyBillCompiledDataByCustomerNumberUsecaseFactory();
    const result: MonthlyCompiledDataReturnedDTO[] = await usecase.execute({
      customerNumber: String(customerNumber),
    });

    return result;
  }
}

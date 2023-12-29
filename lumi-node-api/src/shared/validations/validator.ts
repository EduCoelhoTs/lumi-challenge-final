export namespace Validator {
  export const isUUID = (uuid: string): boolean => {
    const uuidRegex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;

    return uuidRegex.test(uuid);
  };

  // The date must in the iso format '2000-01-25T10:00:00.929Z'
  export const isISODate = (date: string): boolean => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

    return dateRegex.test(date);
  };
}

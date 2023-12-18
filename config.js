const config = {

    name: {
        id: 'name',
        enabled: true,
        hasInput: true,
        minLength: 3,
        maxLength: 20,
    },

    lastName: {
        id: 'lastName',
        enabled: true,
        hasInput: true,
        minLength: 3,
        maxLength: 20,
      },

    mail: {
        id: 'mail',
        enabled: true,
        hasInput: true,
        valiMail: true,
        },

    bDay: {
        id: 'bDay',
        enabled: true,
        hasInput: true,
        isValidDate: true,
      },

    addressLine1: {
        id: 'addressLine1',
        enabled: true,
        hasInput: true,
        minLength: 4,
        maxLength: 20,
      },

    addressLine2: {
        id: 'addressLine2',
        enabled: true,
      },

    city: {
        id: 'city',
        enabled: true,
        hasInput: true,
        minLength: 3,
        maxLength: 20,
      },

    plz: {
        id: 'plz',
        enabled: true,
        hasInput: true,
        minLength: 4,
        maxLength: 4,
        isInteger: true,
        // includes: ['x', 'y', 'z'],
    },

    phone: {
        id: 'phone',
        enabled: true,
    },

    mobile: {
        id: 'mobile',
        enabled: true,
        hasInput: true,
        minLength: 10,
        maxLength: 10,
        isInteger: true,
    },

    terms: {
        id: 'terms',
        enabled: true,
        checked: true,
    },
  };
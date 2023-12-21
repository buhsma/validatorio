const config = {
    name: {
        id: 'name',
        styles: ["stylesarray"],
        methods: {
            enabled: true,
            hasInput: true,
            minLength: 3,
            maxLength: 20,
        },
    },
    lastName: {
        id: 'lastName',
        styles: ["stylesarray"],
        methods: {
            enabled: true,
            hasInput: true,
            minLength: 3,
            maxLength: 20,
        },
    },
    mail: {
        id: 'mail',
        styles: ["stylesarray"],
        methods: {
            enabled: true,
            hasInput: true,
            valiMail: true,
        },
    },
    bDay: {
        id: 'bDay',
        styles: ["stylesarray"],
        methods: {
            enabled: true,
            hasInput: true,
            isValidDate: true,
        },
    },
    addressLine1: {
        id: 'addressLine1',
        styles: ["stylesarray"],
        methods: {
            enabled: true,
            hasInput: true,
            minLength: 4,
            maxLength: 20,
        },
    },
    addressLine2: {
        id: 'addressLine2',
        styles: ["stylesarray"],
        methods: {
            enabled: true,
        },
    },
    city: {
        id: 'city',
        styles: ["stylesarray"],
        methods: {
            enabled: true,
            hasInput: true,
            minLength: 3,
            maxLength: 20,
        },
    },
    plz: {
        id: 'plz',
        styles: ["stylesarray"],
        methods: {
            enabled: true,
            hasInput: true,
            minLength: 4,
            maxLength: 4,
            isInteger: true,
            // includes: ['x', 'y', 'z'],
        },
    },
    phone: {
        id: 'phone',
        styles: ["stylesarray"],
        methods: {
            enabled: true,
        },
    },
    mobile: {
        id: 'mobile',
        styles: ["stylesarray"],
        methods: {
            enabled: true,
            hasInput: true,
            minLength: 10,
            maxLength: 10,
            isInteger: true,
        },
    },
    terms: {
        id: 'terms',
        styles: ["stylesarray"],
        methods: {
            enabled: true,
            checked: true,
        },
    },
};

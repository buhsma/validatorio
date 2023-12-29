function initializeAtlas() {
const atlasConfig = {
    name: {
      type: 'text',
      styles: ["Name:", "text", "inputField"],
      methods: [
        { enabled: true },
        { hasInput: true },
        { minLength: 3 },
        { maxLength: 20 }
      ],
    },
    lastName: {
      type: 'text',
      styles: ["Last Name:", "text", "inputField"],
      methods: [
        { enabled: true },
        { hasInput: true },
        { minLength: 3 },
        { maxLength: 20 }
      ],
    },
    mail: {
      type: 'text',
      styles: ["E-Mail:", "text", "inputField"],
      methods: [
        { enabled: true },
        { hasInput: true },
        { valiMail: true }
      ],
    },
    bDay: {
      type: 'text',
      styles: ["Birthday:", "text", "inputField"],
      methods: [
        { enabled: true },
        { hasInput: true },
        { isValidDate: true }
      ],
    },
    addressLine1: {
      type: 'text',
      styles: ["Address Line 1:", "text", "inputField"],
      methods: [
        { enabled: true },
        { hasInput: true },
        { minLength: 4 },
        { maxLength: 20 }
      ],
    },
    addressLine2: {
      type: 'text',
      styles: ["Address Line 2:", "text", "inputField"],
      methods: [
        { enabled: true }
      ],
    },
    city: {
      type: 'text',
      styles: ["City:", "text", "inputField"],
      methods: [
        { enabled: true },
        { hasInput: true },
        { minLength: 3 },
        { maxLength: 20 }
      ],
    },
    plz: {
      type: 'text',
      styles: ["ZIP Code:", "text", "inputField"],
      methods: [
        { enabled: true },
        { hasInput: true },
        { minLength: 4 },
        { maxLength: 4 },
        { isInteger: true },
        // { includes: ['x', 'y', 'z'] },
      ],
    },
    phone: {
      type: 'text',
      styles: ["Phone:", "text", "inputField"],
      methods: [
        { enabled: true }
      ],
    },
    mobile: {
      type: 'text',
      styles: ["Mobile:", "text", "inputField"],
      methods: [
        { enabled: true },
        { hasInput: true },
        { minLength: 10 },
        { maxLength: 10 },
        { isInteger: true }
      ],
    },





    
    terms: {
      type: 'terms',
      styles: ["Terms:", "checkbox", "inputField"],
      methods: [
        { enabled: true },
        { checked: true }
      ],
    },
    newsletter: {
      type: 'toggle',
      styles: ["Newsletter:", "radio", "form__input--terms"],
      methods: [
        { enabled: true },
        { checked: true }
      ],
    },
    dailyToggle: {
      type: 'toggle',
      config: ['toggleDayly', 'YEAH Please', 'Please NO', 'Dayly Newsletter'],
      methods: [
        { enabled: true },
        { checked: true }
      ],
    },
    weeklyToggle: {
      type: 'toggle',
      config: ['toggleWeekly', 'YAYA', 'NONO', 'Weekly Newsletter'],
      methods: [
        { enabled: true },
        { checked: true }
      ],
    },
  };

  const atlas = JSON.stringify(atlasConfig);
  sessionStorage.setItem('atlas', atlas);
  console.log('Atlas initialized in sessionStorage.');
};


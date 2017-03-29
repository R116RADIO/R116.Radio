/**
 * Created by haunguyen on 12/13/16.
 */
/* eslint no-unused-vars: ["error", { "vars": "local" }] */
/*  eslint no-undef: "error" */
// gtm +3
// convert to GTM +0
ENUMS = {
  //old
  // PROGRAM_SCHEDULE: [
  //   {
  //     time: {
  //       from: '3:00',
  //       to: '7:00'
  //     },
  //     program: 'Pop'
  //   },
  //   {
  //     time: {
  //       from: '7:00',
  //       to: '10:00'
  //     },
  //     program: 'R&B Soul'
  //   },
  //   {
  //     time: {
  //       from: '10:00',
  //       to: '12:00'
  //     },
  //     program: 'Slow Workship'
  //   },
  //   {
  //     time: {
  //       from: '12:00',
  //       to: '16:00'
  //     },
  //     program: 'Dancehall'
  //   },
  //   {
  //     time: {
  //       from: '16:00',
  //       to: '21:00'
  //     },
  //     program: 'Fresh/Hip-hop'
  //   }
  // ]
  PROGRAM_SCHEDULE: [
    {
      dayOfWeek: 0,
      programs: [
        {
          from: '3:00',
          to: '7:00',
          name: 'Pop'
        },
        {
          from: '7:00',
          to: '10:00',
          name: 'Rock'
        },
        {
          from: '10:00',
          to: '14:00',
          name: 'Jazz'
        },
        {
          from: '14:00',
          to: '18:00',
          name: 'Metal'
        },
        {
          from: '18:00',
          to: '24:00',
          name: 'Disco'
        }
      ]
    },
    {
      dayOfWeek: 1,
      programs: [
        {
          from: '3:00',
          to: '7:00',
          name: 'Pop'
        },
        {
          from: '7:00',
          to: '12:00',
          name: 'Rap'
        },
        {
          from: '12:00',
          to: '18:00',
          name: 'Opera'
        },
        {
          from: '18:00',
          to: '21:00',
          name: 'Pop'
        },
        {
          from: '21:00',
          to: '24:00',
          name: 'Punk'
        }
      ]
    },
    {
      dayOfWeek: 2,
      programs: [
        {
          from: '3:00',
          to: '7:00',
          name: 'Pop'
        },
        {
          from: '7:00',
          to: '9:00',
          name: 'Pop'
        },
        {
          from: '9:00',
          to: '14:00',
          name: 'Pop'
        },
        {
          from: '14:00',
          to: '20:00',
          name: 'Pop'
        },
        {
          from: '20:00',
          to: '24:00',
          name: 'Pop'
        }
      ]
    },
    {
      dayOfWeek: 3,
      programs: [
        {
          from: '3:00',
          to: '7:00',
          name: 'Pop'
        },
        {
          from: '7:00',
          to: '14:00',
          name: 'Rock'
        },
        {
          from: '14:00',
          to: '20:00',
          name: 'Rap'
        },
        {
          from: '20:00',
          to: '24:00',
          name: 'Jazz'
        }
      ]
    },
    {
      dayOfWeek: 4,
      programs: [
        {
          from: '3:00',
          to: '7:00',
          name: 'Pop'
        },
        {
          from: '7:00',
          to: '11:00',
          name: 'Pop'
        },
        {
          from: '11:00',
          to: '18:00',
          name: 'Blue'
        },
        {
          from: '18:00',
          to: '24:00',
          name: 'Doom'
        }
      ]
    },
    {
      dayOfWeek: 5,
      programs: [
        {
          from: '3:00',
          to: '7:00',
          name: 'Pop'
        },
        {
          from: '7:00',
          to: '16:00',
          name: 'Jazz'
        },
        {
          from: '16:00',
          to: '24:00',
          name: 'Rock'
        }
      ]
    },
    {
      dayOfWeek: 6,
      programs: [
        {
          from: '3:00',
          to: '7:00',
          name: 'Pop'
        },
        {
          from: '7:00',
          to: '10:00',
          name: 'Doom'
        },
        {
          from: '10:00',
          to: '16:00',
          name: 'Rock'
        },
        {
          from: '16:00',
          to: '24:00',
          name: 'Metal'
        }
      ]
    }
  ]

};

CONST = {
  EMAIL: {
    FROM_ADMIN: 'abc@example.com', // Administrator Radio R116
    TO_ADMIN: 'support@r116solutions.com' // Administrator Radio R116
  }
};

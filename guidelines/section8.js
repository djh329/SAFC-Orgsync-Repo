const section8 = [
{
  "title":"Administrative Expenses",
  "list":[
    {
      "title":"General Purpose",
      "type":"blank",
      "list":["Administrative expenses support the basic operation and administration of the organization."]
    },
    {
      "title":"Permitted Expenses",
      "type":"blank",
      "list":[
        {
          "title":"The following expenses are allowed under this category:",
          "type":"numeric",
          "list":[
            "copying and printing services not related to advertising for specific local events;",
            "chalk;",
            "advertising for recruitment;",
            "repairs and maintenance of equipment;",
            "Willard Straight Hall mailbox rental fee and on-campus storage areas;",
            "web hosting;",
            "social media advertising; and",
            "stickers."
          ]
        }
      ]
    },
    {
      "title":"Prohibited Expenses",
      "type":"blank",
      "list":[
        {
          "title":"The following expenses are prohibited under the administrative expenses category:",
          "type":"numeric",
          "list":[
            "durable goods and items with a typical or expected useful life of more than one year.",
            "Group and individual membership fees."
          ]
        },
      ]
    },
    {
      "title":"Maximum Funding",
      "type":"blank",
      "list":["Administrative expenses may not exceed $"+MAX_ADMIN_FUNDING+" per semester."]
    }
  ]
},
{
      "title":"Local Event",
      "list":[
      {
        "title":"Purpose",
        "type":"blank",
        "list":["This category includes expenses associated with putting on an event, program or practice."]
      },
      {
        "title":"Eligible Events",
        "type":"blank",
        "list":[
          {
            "title":"To be eligible for funding the event must:",
            "type":"numeric",
            "list":
            [
              "occur between the first and last day of classes:",
              "occur on a weekday when classes are in session or a weekend that is not part of a university holiday such as Fall Break or Spring Break; and,",
              {
                "title":"be one of the following:",
                "list":[
                  "a practice session for athletic or performance organizations, or",
                  "a public event open to the Cornell community to the extent permitted by spatial, temporal, or financial constraints;"
                ]
              },
              {
                "title":"not have a primary or substantive purpose of:",
                "list":[
                  "conversion/worship",
                  "influencing legislation",
                  "partisan political activity",
                  "raising funds for profit",
                  "raising funds for charity, unless the event has another equally substantive purpose related to the mission of the organization",
                  "social activity; and,",
                  "comply with the Use of University Property Policy, if it occurs on campus."
                ]
              },
            ]
          }
        ]
      },
          {
            "title":"Permitted Expenses",
            "type":"blank",
            "list":
            [
              {
                "title":"The following expenses are permitted under this category if they relate to an eligible event, are not among the prohibited expenses for the category, and are for:",
                "type":"numeric",
                "list":
                [
                  {
                    "title":"guest performers, including:",
                    "list":
                    [
                      "honorarium, engagement or coaching fee,",
                      "transport,",
                      "lodging, and",
                      "meals;"
                    ]
                  },
                  "venue rental;",
                  "professional event production services;",
                  "supplies and materials essential to the event;,",
                  "media rental and licensing fees; and,",
                  "copies and chalk",
                  "security fees",
                  "professional video/sound recording or photography expenses."
                ]
              },
              "If an event is allocated funding, the Commission will provide up to two complementary, vertical eighth-page advertisements or the online equivalent in value to publicize the event in the Cornell Daily Sun. Funding is not allocated for these ads in the organization's funding request, but the organization may pay for the ads using the Cornell Daily Sun Advertisement Authorization Form."
            ]
          },
          {
            "title":"Prohibited Expenses",
            "type":"blank",
            "list":
            [
              {
              "title":"The following expenses are prohibited under the local events category:",
              "type":"numeric",
              "list":
              [
                "durable goods and items with a typical or expected useful life of more than one year,",
                "Duplicates functionality or service already available on campus (ex. utensils, cameras)",
                "food other than meals for performers as provided in permitted expenses,",
                "travel expenses for members of the organization to a location within Tompkins County,",
                {
                  "title":"honorarium or engagement fee if paid to:",
                  "list":
                  [
                    "a speaker or performer with whom another organization has negotiated an engagement fee, documented by a Letter of Intent filed with the Commission, for which it is seeking funding from the Commission,",
                    "a university student,",
                    "a university employee,",
                    "an alumnus who graduated within five years, or",
                    "a parent, adopted parent, sibling, step-sibling, or child of a Cornell student. "
                  ]
                },
                "Any items that are given away,",
                "Entry fees/member dues paid to another SAFC-funded organization."
              ]
             }
            ]
          },
          {
            "title":"Application Requirements",
            "type":"blank",
            "list":
            [
              {
              "title":"Applicant must submit",
              "type":"numeric",
              "list":
                [
                "price quote documentation for each individual expense; and",
                "a completed Letter of Intent Form for each guest performer for which it requests funds in this category."
                ]
              },
              "A Letter of Intent Form is a form available online from the SAFC, which must be completed by the speaker or performer and the group organizing the event. It is not binding upon either party, but it documents the good-faith intent of the parties to organize the event."
            ]
          },
          {
            "title":"Maximum Funding",
            "type":"blank",
            "list":
            [
              {
                "title":"The following caps will apply to expenses under the local events category:",
                "type":"numeric",
                "list":
                [
                  "Lodging for guest performers may not exceed $"+MAX_LOCAL_LODGING_FUNDING_SOLO+" per night and $"+MAX_LOCAL_LODGING_FUNDING_GROUP+" per person for any additional persons if the guest performer is a group of people.",
                  "Meals for guest performers may not exceed $"+MAX_LOCAL_MEAL_FUNDING+" per person per day.",
                  "Travel expenses for guest performers may not exceed the eligible amount under the Internal Revenue Service rate, listed under negotiated rates.",
                  "Expenditures for electronics (i.e. cameras, speakers, etc) are capped at $"+MAX_LOCAL_ELECTRONICS_FUNDING,
                  "Copies and chalk for publicity may not exceed $"+MAX_LOCAL_PUBLICITY_FUNDING+" per event."
                ]
              }
            ]
          }
        ]
},
{
  "title":"Travel Event",
  "list":[
    {
      "title":"Purpose",
      "type":"blank",
      "list":["he commission funds expenses related to student participation in conferences and tournaments away from the university."]
    },
    {
      "title":"Eligible Events",
      "type":"blank",
      "list":
      [
        {
          "title":"To be eligible for funding the event must:",
          "type":"numeric",
          "list":
          [
            "be located outside the municipal limits of Tompkins County, New York;",
            "occur between the first day of classes and the last day of exams for the semester in which it occurs;",
            "be organized and hosted by another institution;",
            "not be a retreat in which group members partake in team building, training activities, and other such activities which do not further the purpose of the organization; and,",
            {
              "title":"not have a primary or substantive purpose of:",
              "list":
              [
                "conversion/worship",
                "influencing legislation",
                "partisan political activity",
                "raising funds for profit",
                "raising funds for charity, unless the event has another equally substantive purpose related to the mission of the organization",
                "social activity."
              ]
            }
          ]
        }
      ]
    },
    {
      "title":"Permitted Expenses",
      "type":"blank",
      "list":
      [
        {
          "title":"The following expenses are permitted under this category if they relate to an eligible event, are not among the prohibited expenses for the category, and are:",
          "type":"numeric",
          "list":
          [
              {
                "title":"student travel expenses, including:",
                "list":["transport, and","lodging."]
              },
              "entry fees; and,",
              "national/group dues;",
              "supplies and materials essential to participation in the event."
          ]
        }
      ]
    },
    {
      "title":"Prohibited Expenses",
      "type":"blank",
      "list":
      [
        {
        "title":"The following expenses are prohibited under the travel events category:",
        "type":"numeric",
        "list":
          [
            "durable goods and items with a typical or expected useful life of more than one year,",
            "meals, unless the meals cannot be separated from an otherwise eligible expense, or",
            "social activities, unless the activities cannot be separated from an otherwise eligible expense."
          ]
        }
      ]
    },
    {
      "title":"Application Requirements",
      "type":"blank",
      "list":
      [
        {
        "title":"Applicant must submit:",
        "type":"numeric",
        "list":
          [
            "travel event documentation for each individual event."
          ]
        },
        {
        "title":"Travel event documentation must:",
        "type":"numeric",
        "list":
          [
            "originate from the event organizer in the form of a letter, fax, or website printout; and",
            {
              "title":"specify:",
              "list":
              [
                "organizer of the event, including a phone, email, or web contact;",
                "date of the event;",
                "location of the event;",
                "description or subject of the event; and",
                "all expenses associated with the event."
              ]
            }
          ]
        },
      ]
    },
    {
      "title":"Maximum Funding",
      "type":"blank",
      "list":
      [
        {
          "title":"The following caps will apply to expenses under the travel events category:",
          "type":"numeric",
          "list":
          [
            "Student travel expenses for travel events may not exceed the eligible amount under the student travel rate, listed under negotiated rates.",
            "For destinations outside the contiguous United States that are not within "+MAX_TRAVEL_DISTANCE+" miles of Ithaca the Commission will allocate a maximum of $"+MAX_TRAVEL_FUNDING+" for travel expenses per event."
          ]
        }
      ]
    }
  ]
},
{
    "title":"Durable Good",
    "list":
    [
      {
        "title":"Purpose",
        "type":"blank",
        "list":
        [
          "The commission funds purchases of items with a useful life of more than a year that are necessary for an organization's purpose."
        ]
      },
      {
        "title":"Eligibility",
        "type":"blank",
        "list":
        [
          "To receive funding for expenses in this category, the organization must submit current information about each of the durable goods it has purchased with SAFC funds in the last three years with the current budget request."
        ]
      },
      {
        "title":"Permitted Expenses",
        "type":"blank",
        "list":
        [
          {
            "title":"Expenses permitted under this category include:",
            "type":"numeric",
            "list":
            [
              {
                "title": "purchase or repair of a durable good which:",
                "list":
                [
                  "has a typical and expected useful life of at least one year;",
                  "will be held on campus for active use by the organization for its entire expected useful life;",
                  "is necessary to carry out activities related to the organization's purpose; and,",
                  "is intended for use in activities that would be eligible local events, travel events, or publications"
                ]
              }
            ]
          }
        ]
      },
      {
        "title":"Prohibited Expenses",
        "type":"blank",
        "list":
        [
          {
            "title":"The following expenses are prohibited under the durable goods category:",
            "type":"numeric",
            "list":
            [
              "is purchased for personalized issue or use;",
              "will not be stored in an on-campus facility managed by the organization or its advisor;",
              "duplicates functionality or service already available on campus;",
              "is used to produce publicity items;",
              "any items that are given away;",
              "speakers unless the purpose of your organization is a performance group;",
              "Apparels that are not uniforms;",
              "Uniforms unless the purpose of your organization is a performance or sports group;",
              {
                "title": "is an office good such as, but not limited to:",
                "list":
                [
                  "Stickers",
                  "pens,",
                  "pencils,",
                  "markers,",
                  "paper,",
                  "filing cabinets,",
                  "hole punches,",
                  "staplers,",
                  "and paperweights; or,"
                ]
              },
              {
                "title": "is among the following:",
                "list":
                [
                  "media for physical copying or production of music or video,",
                  "electronics (ex: laptops, iPads, cameras, chargers, computer parts)",
                  "software, and video games/gaming system",
                  "Televisions, radios,",
                  "refrigerator, ",
                  "adaptors (ex: dongles, HDMI) or",
                  "flash drives and hard-drives."
                ]
              },
            ]
          }
        ]
      },
      {
        "title":"Application Requirements",
        "type":"blank",
        "list":
        [
          {
          "title": "Applicant must submit:",
          "type":"numeric",
          "list":
            [
              "price quote documentation for each individual expense.",
              "on-campus (Cornell's Ithaca Campus) storage location for each individual good.",
              "A list of the last 3 semesters of durable goods"
            ]
          }
        ]
      }
    ]
},
{
  "title":"Publication",
  "list":
  [
    {
    "title":"Purpose",
    "type": "blank",
    "list":["The commission funds production of publications for general distribution to the campus community."]
    },
    {
    "title":"Maximum Allocation",
    "type": "blank",
    "list":["he commission allocates a maximum of $"+MAX_PUBLICATION_FUNDING+" per academic semester for production of a publication."]
    },
    {
    "title":"Eligible Publications",
    "type": "blank",
    "list":
      [
        {
          "title":"For expenses to be eligible under this category, they must support production of a publication that:",
          "type":"numeric",
          "list":
          [
            "circulates in the same academic semester funds are issued;",
            "is available to the entire Cornell community and distributed at locations on campus frequented by this community, including campus dining facilities, student centers, libraries;",
            "issue at least "+MIN_PUBLICATION_COPIES+" copies; and,",
            "include the e-mail, phone, or mailing address for the president, treasurer, and advisor of the organization in each issue."
          ]
        }
      ]
    },
    {
    "title":"Permitted Expenses",
    "type": "blank",
    "list":["Expenses are permitted under this category solely for production of eligible publications."]
    },
    {
    "title":"Application Requirements",
    "type": "blank",
    "list":
      [
        {
          "title":"For each publication, the applicant must provide:",
          "type":"numeric",
          "list":
          [
            "price quote documentation for each individual expense; and",
            {
              "title":"either:",
              "list":
              [
                "a copy of a recent issue of the publication; or,",
                "in the case of a new publication, a written outline detailing the format, content, and intended audience of the publication."
              ]
            }
          ]
        }
      ]
    },
  ]
}
]

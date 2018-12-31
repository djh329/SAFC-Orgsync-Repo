const calendar = [
  // MONTHS ARE OFF BY ONE, USE MONTH INDEX: January == 0, Feb == 1...
  {
    "name": "Dual Semester / Total Funding Application Deadline",
    "notes": "to request all funding in one semester",
    "date": new Date(2018, 8, 7) // September 7th, 2018
  },
  {
    "name": "Budget Application Available",
    "date": new Date(2019, 0, 22) // January 22nd, 2019
  },
  {
    "name": "Budget Help Session 1",
    "date": new Date(2019, 0, 29, 17), //  January 29th, 2019 at 5:00
    "location": "GSH G64"
  },
  {
    "name": "Budget Help Session 2",
    "date": new Date(2019, 0, 30, 17), // January 30th, 2019 at 5:00
    "location": "GSH G76"
  },
  {
    "name": "Budget Help Session 3",
    "date": new Date(2019, 0, 31, 17), //  January 31st, 2019 at 5:00
    "location": "GSH G64"
  },
  {
    "name": "Commisioner Office Hours",
    "date": new Date(2019, 1, 5, 17), //  February 5th, 2019 from 5:00-7:00
    "end": new Date(2019, 1, 5, 19),
    "location": "Willard Straight Hall 413"
  },
  {
    "name": "Commisioner Office Hours",
    "date": new Date(2019, 1, 6, 17), //  February 6th, 2019 from 5:00-7:00
    "end": new Date(2019, 1, 6, 19),
    "location": "Willard Straight Hall 413"
  },
  {
    "name": "Budget Deadline",
    "date": new Date(2019, 1, 8, 16), //  February 8th, 2019 from 4:00
    "important": true
  },
  {
    "name": "Preliminary Allocations Released",
    "date": new Date(2019, 1, 15, 16), //  February 15th, 2019 at 4:00
  },
  {
    "name": "Deadling to Sign Up for a Budget Hearing",
    "date": new Date(2019, 1, 20, 16), //  February 20th, 2019 at 4:00
  },
  {
  "name": "Budget Hearings",
  "date": new Date(2019, 1, 20, 17), // February 20th, 2019 from 5:00pm
  "end": new Date(2019, 1, 20, 21), // to 9:00pm
  "location": "WSH Loft 1 and 2 (WSH 604 & 605) & WSH 413 "
},
{
  "name": "Hard Copies of Supporting Documentation Due",
  "date": new Date(2019, 1, 21, 12), //  February 21st, 2019 from 12:00
  "important": true
},
  {
  "name": "Final Allocations Released",
  "date": new Date(2019, 1, 27, 16), //  February 27th, 2019 at 4:00pm
  "notes": "via email"
  },
  {
  "name": "Deadline to sign up for an appeal",
  "date": new Date(2019, 1, 27, 12), //  February 27th, 2019 at 12:00pm
  "important": true,
  "hyperlink": {
    "text":"via email per Section 6",
    "link": "http://testorgregistration.orgsync.com/org/safc/guidelines#Appeal"
    }
  },
  {
  "name": "Spending Funds Help Session 1",
  "date": new Date(2019 , 2, 4, 17), // March 4th, 2019 from 5:00pm
  "end": new Date(2019, 2, 4, 18), // to 6:00pm
  "location": "Upson 225"
  },
  {
  "name": "Spending Funds Help Session 2",
  "date": new Date(2019, 2, 5, 17), // March 5th, 2019 from 5:00pm
  "end": new Date(2019, 2, 5, 18), // to 6:00pm
  "location": "Upson 225"
  },
  {
  "name": "Special requests due to 401 E WSH",
  "date": new Date(2019, 3, 12, 16), // April 12th, 2019 at 4:00pm
  "important": true,
  "notes": "Special projects, category transfers, and special cancellations. Direct payment authorization for durable goods and publications"
  },
  {
  "name": "SAFC Recruitment Info Session 1",
  "date": new Date(2019, 3, 15, 17), // April 15th, 2019 at 5:00pm
  "end": new Date(2019, 3, 15, 18), // to 6:00pm
  "location": "GSH G64"
  },
  {
  "name": "SAFC Recruitment Info Session 2",
  "date": new Date(2019, 3, 16, 17), // April 16th, 2019 at 5:00pm
  "end": new Date(2019, 3, 16, 18), // to 6:00pm
  "location": "GSH G64"
  },
  {
  "name": "SAFC Recruitment Application Deadline",
  "date": new Date(2019, 3, 19, 23, 59), // April 19th, 2019 at 11:59pm
  },
  {
  "name": "Deadline for other payment requests",
  "date": new Date(2019, 4, 13, 16), // May 13th, 2019 at 4:00pm
  "important": true
  }
]

function format_date(date, end) {
  var dayNames = [
  "Sunday", "Monday", "Tuesday",
  "Wednesday", "Thursday", "Friday", "Saturday"
  ]

  var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
  ]

  var dayEndings = [
    'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th',
    'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
    'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th',
    'th', 'st']

  var month = monthNames[date.getMonth()]
  var day = dayNames[date.getDay()]
  var dayEnding =  dayEndings[date.getDate()]
  var numDate = date.getDate() + dayEnding

  var hours = date.getHours() % 12 ? date.getHours() % 12 : 12
  var min = date.getMinutes() ? date.getMinutes() : '00'
  var ampm = date.getHours() >= 12 ? "PM" : "AM"
  var time = " at " + hours + ":" + min + ampm
  if (end) {
    var endHours = end.getHours() % 12 ? end.getHours() % 12 : 12
    var endMin = end.getMinutes() ? end.getMinutes() : '00'
    var endAmpm = end.getHours() >= 12 ? "PM" : "AM"
    time += '-' + endHours + ":" + endMin + endAmpm
  }
  return day + ", " + month + " " + numDate+ " " + time
}

function format_location(location) {
  return location ? (" in " + location) : ''
}

function format_notes(notes, hyperlink) {
  if (!notes && !hyperlink) {
    return ''
  }
  var domString = '<p style="margin-top:0px">';
  if (notes) {
    domString+= '<i>' + notes + '</i>'
  }
  if (hyperlink) {
    domString+= '<a href='+hyperlink.link+'>'+hyperlink.text+'</a>'
  }
  return domString + '</p>'
}

function generate_event(e) {
  var isBold = e.important ? 'style="font-weight:bold"' : 'style=""'
  var isBoldInner = e.important ? 'style="font-weight:bold;margin-top:0px"' : 'style="margin-top:0px"'

  var domString = '<tr ' + isBold + '>'
  domString += '<td>'+ '<p' + isBoldInner +'>' + e.name + format_notes(e.notes, e.hyperlink) +  '</td>'
  domString += '<td>' + format_date(e.date, e.end) + format_location(e.location) + '</td>'
  domString += '</tr>'
  return domString
}

function generate_calendar(calendar) {
  var domString = '<div marginTop="10px">'
  domString += '<table style="width:100%"><tr><th>Name</th> <th>Description</th> </tr>'
  calendar.forEach((event_item) => {
    domString+=generate_event(event_item)
  })
  domString+= '</table>'
  domString+= '</div>'
  return domString
}


function write_calendar() {
  document.write(generate_calendar(calendar))
}

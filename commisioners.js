const ENGINEERING = "College of Engineering"
const CALS = "College of Agriculture and Life Sciences"


const JUNIOR = 'Junior'
const SENIOR = 'Senior'

const senior_commisioners = [
  {
    "name": "Andrew Baker",
    "college": CALS,
    "year": SENIOR,
    "netid": 'asb234',
    "link": '[[image:andrewbaker]]'
  },
  {
    "name": "Andrew Baker",
    "college": CALS,
    "year": SENIOR,
    "netid": 'asb234',
    "link": '[[image:andrewbaker]]'
  },
  {
    "name": "Andrew Baker",
    "college": CALS,
    "year": SENIOR,
    "netid": 'asb234',
    "link": '[[image:andrewbaker]]'
  },
  {
    "name": "Andrew Baker",
    "college": CALS,
    "year": SENIOR,
    "netid": 'asb234',
    "link": '[[image:andrewbaker]]'
  },
  {
    "name": "Andrew Baker",
    "college": CALS,
    "year": SENIOR,
    "netid": 'asb234',
    "link": '[[image:andrewbaker]]'
  },
  {
    "name": "Andrew Baker",
    "college": CALS,
    "year": SENIOR,
    "netid": 'asb234',
    "link": '[[image:andrewbaker]]'
  },
  {
    "name": "Andrew Baker",
    "college": CALS,
    "year": SENIOR,
    "netid": 'asb234',
    "link": '[[image:andrewbaker]]'
  },
  {
    "name": "Andrew Baker",
    "college": CALS,
    "year": SENIOR,
    "netid": 'asb234',
    "link": '[[image:andrewbaker]]'
  }
]

const commisioners = [
  {
    "name": "Andrew Baker",
    "college": CALS,
    "year": SENIOR,
    "netid": 'asb234',
    "link": '[[image:andrewbaker]]'
  },
  {
    "name": "Andrew Baker",
    "college": CALS,
    "year": SENIOR,
    "netid": 'asb234',
    "link": '[[image:andrewbaker]]'
  },
  {
    "name": "Andrew Baker",
    "college": CALS,
    "year": SENIOR,
    "netid": 'asb234',
    "link": '[[image:andrewbaker]]'
  },
  {
    "name": "Andrew Baker",
    "college": CALS,
    "year": SENIOR,
    "netid": 'asb234',
    "link": '[[image:andrewbaker]]'
  },
  {
    "name": "Andrew Baker",
    "college": CALS,
    "year": SENIOR,
    "netid": 'asb234',
    "link": '[[image:andrewbaker]]'
  },
  {
    "name": "Andrew Baker",
    "college": CALS,
    "year": SENIOR,
    "netid": 'asb234',
    "link": '[[image:andrewbaker]]'
  },
  {
    "name": "Andrew Baker",
    "college": CALS,
    "year": SENIOR,
    "netid": 'asb234',
    "link": '[[image:andrewbaker]]'
  }
]

function renderCommisioners(comms) {
  var docString = '<ul class="grid">'
  comms.forEach((commisioner, index) => {
    var commString = '<li>' + '<img src=\"' + commisioner.link + '\"/>'
    commString += '<h3>'
    commString += commisioner.name
    commString += '<br /><span class="title">' + commisioner.year + '<br />' + '</span>'
    commString += '<span class="title">' + commisioner.netid + '@cornell.edu</span>' + '</h3>' + '</li>'
    docString += commString
  })
  docString += '</ul>'
  return docString
}

function write_commisioners() {
  document.write(renderCommisioners(commisioners))
}

function write_senior_commisioners(){
document.write(renderCommisioners(senior_commisioners))
}

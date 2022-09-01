// create an array of service tickets
var serviceTickets = [
    {
        id: 1,
        title: 'Service Ticket 1',
        description: 'This is a service ticket 1',
        status: 'Open'
    },
    {
        id: 2,
        title: 'Service Ticket 2',
        description: 'This is a service ticket 2',
        status: 'Open'
    },
    {
        id: 3,
        title: 'Service Ticket 3',
        description: 'This is a service ticket 3',
        status: 'Open'
    }
];


// create a function that maps all the services tickets to the DOM element with the id of 'serviceList
function renderServiceTickets(serviceTickets) {
    var serviceList = document.getElementById('serviceList');
    serviceList.innerHTML = '';
    serviceTickets.forEach(function (serviceTicket) {
        var serviceTicketEl = document.createElement('li');
        serviceTicketEl.innerHTML = `${serviceTicket.title} | ${serviceTicket.description} | ${serviceTicket.status}`;
        serviceList.appendChild(serviceTicketEl);
    }
    );
}   

renderServiceTickets(serviceTickets);


// create an array of sales leads
var salesLeads = [
    {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555'
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'janedoe@yahoo.com',
        phone: '123-456-7890'
    },
    {
        id: 3,
        name: 'Joe Smith',
        email: 'jsmith@gmail.com',
        phone: '555-555-5555'
    }
];

// create a function that maps all the sales leads to the DOM element with the id of 'leadList'
function renderSalesLeads(salesLeads) {
    var leadsList = document.getElementById('leadList');
    leadsList.innerHTML = '';
    salesLeads.forEach(function (salesLead) {
        var salesLeadEl = document.createElement('li');
        salesLeadEl.innerHTML = `${salesLead.name} | ${salesLead.email} | ${salesLead.phone}`;
        leadsList.appendChild(salesLeadEl);
    }
    );
}

renderSalesLeads(salesLeads);


// create an array of monday.com tasks
var mondayTasks = [
    {
        id: 1,
        title: 'Task 1',
        description: 'This is a task 1',
        status: 'Open'
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'This is a task 2',
        status: 'Open'
    },
    {
        id: 3,
        title: 'Task 3',
        description: 'This is a task 3',
        status: 'Open'
    }
];

// create a function that maps all the monday.com tasks to the DOM element with the id of 'taskList'
function renderMondayTasks(mondayTasks) {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    mondayTasks.forEach(function (mondayTask) {
        var mondayTaskEl = document.createElement('li');
        mondayTaskEl.innerHTML = `${mondayTask.title} | ${mondayTask.description} | ${mondayTask.status}`;
        taskList.appendChild(mondayTaskEl);
    }
    );
}

renderMondayTasks(mondayTasks);

// create an array of upcomming auctions with the following properties:
// , title, startDate, endDate, regStart, regEnd, location, status

var auctions = [
    {
        id: 1,
        title: 'Auction 1',
        startDate: '01/01/2022',
        endDate: '01/01/2022',
        regStart: '01/01/2022',
        regEnd: '01/01/2022',
        location: 'Location 1',
        status: 'Open'
    },
    {
        id: 2,
        title: 'Auction 2',
        startDate: '01/01/2022',
        endDate: '01/01/2022',
        regStart: '01/01/2022',
        regEnd: '01/01/2022',
        location: 'Location 2',
        status: 'Not Started'
    },
    {
        id: 3,
        title: 'Auction 3',
        startDate: '01/01/2022',
        endDate: '01/01/2022',
        regStart: '01/01/2022',
        regEnd: '01/01/2022',
        location: 'Location 3',
        status: 'Closed'
    }
];

// create a function that maps all the auctions to the DOM element with the id of 'saleList'
function renderAuctions(auctions) {
    var auctionList = document.getElementById('saleList');
    auctionList.innerHTML = '';
    auctions.forEach(function (auction) {
        var auctionEl = document.createElement('li');
        auctionEl.innerHTML = `${auction.title} | ${auction.startDate} | ${auction.endDate} | ${auction.regStart} | ${auction.regEnd} | ${auction.location} | ${auction.status}`;
        auctionList.appendChild(auctionEl);
    }
    );
}

renderAuctions(auctions);

// create an array of skip tracing due dates with the following properties:
// , title, dueDate, status

var skipTracing = [
    {
        id: 1,
        title: 'Skip Tracing 1',
        dueDate: '01/01/2022',
        status: 'Open'
    },
    {
        id: 2,
        title: 'Skip Tracing 2',
        dueDate: '01/01/2022',
        status: 'Not Started'
    },
    {
        id: 3,

        title: 'Skip Tracing 3',
        dueDate: '01/01/2022',
        status: 'Closed'

    }
];

// create a function that maps all the skip tracing to the DOM element with the id of 'stddatesList'
function renderSkipTracing(skipTracing) {
    var stddatesList = document.getElementById('stddatesList');
    stddatesList.innerHTML = '';
    skipTracing.forEach(function (stddate) {
        var stddateEl = document.createElement('li');
        stddateEl.innerHTML = `${stddate.title} | ${stddate.dueDate} | ${stddate.status}`;
        stddatesList.appendChild(stddateEl);
    }
    );
}

renderSkipTracing(skipTracing);

// create an array of SNBA due dates with the following properties:
// , title, dueDate, status

var snba = [
    {
        id: 1,
        title: 'SNBA 1',
        dueDate: '01/01/2022',
        status: 'Open'
    },
    {
        id: 2,
        title: 'SNBA 2',
        dueDate: '01/01/2022',
        status: 'Not Started'
    },
    {
        id: 3,
        title: 'SNBA 3',
        dueDate: '01/01/2022',
        status: 'Closed'
    }
];

// create a function that maps all the SNBA due dates to the DOM element with the id of 'snbaList'
function renderSNBA(snba) {
    var snbaList = document.getElementById('snbaList');
    snbaList.innerHTML = '';
    snba.forEach(function (snba) {
        var snbaEl = document.createElement('li');
        snbaEl.innerHTML = `${snba.title} | ${snba.dueDate} | ${snba.status}`;
        snbaList.appendChild(snbaEl);
    }
    );
}

renderSNBA(snba);


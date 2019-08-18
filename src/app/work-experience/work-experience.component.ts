import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  linkedInUrl: string = 'http://www.linkedin.com/in/vishwas-gouru-b72111124';
  courses: Array<string> = ["Angular 2/4/5", "Node.JS", "Typescript", "Javascript", "Agile", "Responsive",
    "MongoDB",
    "Jasmine",
    "Karma",
    "Jenkins",
    "Express.JS"
  ]

  genworth:any = {};
  att:any = {};
  showgenworth: boolean = true;

  constructor() { }

  ngOnInit() {

    this.genworth.name = 'Genworth Financial';
    this.genworth.location = 'Richmond, VA';
    this.genworth.job_title = 'Web Developer';
    this.att.name = 'AT&T';
    this.att.location = 'El Segundo, CA';
    this.att.job_title = 'Software Developer';
    this.genworth.project_description = 'Genworth Financial is an S&P 400 insurance company. The firm was founded as The Life Insurance Company of Virginia in 1871. In 1986, Life of Virginia was acquired by Combined Insurance, which became Aon plc in 1987. I am working on a consumer facing application that deals with customer’s claims, profiles, policies, payments with a user base of around 300K users using the web application. Goal of the project is to reduce the paper mailing and transfer the user base to follow paperless transactions and to reduce the number of calls to customer care asking for information.';

    this.att.project_description = 'The project is to create an operational dashboard that provides a comprehensive snapshot of performance, which includes the total number of stories, features, bugs, and epics that are in progress, completed, and not started status in a particular sprint or in a Program Increment. This project shows various graphs where we can see the overview of the project in this dashboard and is used by the executives, leadership teams, and approximately 30 scrum teams in the project and is displayed on the screens throughout the campus.';

    this.att.responsibilities = [
      "	Plan Program Increment (PI) for the sprints by following Scaled Agile Framework by all the scrum teams and Kanban teams in JIRA.",
"	Designed UX for the dashboard based on the requirements from the executives, and leadership teams using Axure.",
"	Architected, Designed, developed and maintained applications for PESAT project using MongoDB, Express JS, Angular 4/5 and NodeJS (MEAN) Stack bundle of frameworks.",
"	Angular modules like BrowserModule, CommonModule, FormsModule, RouterModule, and HttpClientModule are used in developing the application.",
"	Created multiple components, directives, services, and pipes for the application.",
"	Performed MongoDB CRUD operations to insert, update, delete and to query the documents and created different collections on the database.",
"	Bitbucket is used as the version control for this project and the application is deployed through Jenkins on Dev, Stage and Production environments.",
"	Written MySQL queries to get the data from the database and consumed APIs to get the required data for the application depending on different views.",
"	Integrating multiple systems through APIs and make them work in symmetry depending on the business user’s requirements and engender efficiency in the process.",
"	Consumed data from various APIs using RESTful Web Services and processed data for different needs on the view.",
"	Used Bootstrap 4 framework to create a responsive web design.",
"	Securing the applications by using Cookie based Authentication.",
"	Pitched new ideas and contributed to POCs for new technologies for the architecture.",
"	Support other applications before and after each Release in Dev, Stage and Production environments.",
"	Business and Technical design documents throughout the development and after releases.",
"	Mentored and assisted junior developers throughout the project."
    ]

    this.genworth.responsibilities = [
      "	Part of an Agile work that involved sprint planning, sprint review, sprint retrospective and create stories",
"	Angular modules like BrowserModule, CommonModule, FormsModule, RouterModule, and HttpClientModule are used in developing the application.",
"	Performed MongoDB CRUD operations to insert, update, delete and to query the documents and created different collections on the database.",
"	Stylings for the application is done by CSS pre-processor LESS.", 
"	Use SOAP UI in testing the web services required for the web applications.",
"	Stash is used as the version control for this project and the application is deployed through Jenkins on Dev, Stage and Production environments.",
"	Use Splunk to track and monitor the logs of the application.",
"	Write MySQL queries to get the data from the database and consumed APIs to get the required data for the application depending on different views.",
"	Use AppDynamics to monitor and manage the performance of the application on different servers. ",
"	Write unit tests for different functionalities using frameworks like Jasmine and Karma.",
"	Deploy application on the JBOSS app server.",
"	Integrating multiple systems through APIs and make them work in symmetry depending on the business user’s requirements and engender efficiency in the process.",
"	Consumed data from various APIs using RESTful Web Services and processed data for different needs on the view.",
"	Use Bootstrap 4 framework to create a responsive web design.",
"	Pitched new ideas and contributed to POCs for new technologies for the architecture.",
"	Support other applications before and after each Release in Dev, Stage and Production environments."
    ];


  }

  showGenworth(){
    this.showgenworth = true;
  }

  hideGenworth(){
    this.showgenworth = false;
  }

}

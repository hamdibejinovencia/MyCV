import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses=
  [
    {"id":1, "title":"Angular & ASP.NET Core", "logo":"./assets/angular_logo.png",
    
    "chapitres":[
      {"id":1,
      "title":"The fundamentals of Angular (English Vesrion)",
      "path":"./assets/my courses/angular and asp.net core/Angular 7 _ En.pdf",
      "logo":"./assets/pdf_logo.png"
    },
    {"id":2,
    "title":"The fundamentals of Angular (French Version)",
    "path":"./assets/my courses/angular and asp.net core/Angular 7 _ Fr.pdf",
    "logo":"./assets/pdf_logo.png"
    },
    {"id":3,
    "title":"Simple CRUD",
    "path":"./assets/my courses/angular and asp.net core/CRUD en Asp.Net Core Web API et Angular 7.pdf",
    "logo":"./assets/pdf_logo.png"
    },
    {"id":4,
    "title":"Master-Detail CRUD",
    "path":"./assets/my courses/angular and asp.net core/CRUD Master-Detail en Angular 7 avec les Web API.pdf",
    "logo":"./assets/pdf_logo.png"
    },
    {"id":5,
    "title":"Master-Detail CRUD Source Code",
    "path":"./assets/my courses/angular and asp.net core/WebAPI_MasterDetail.rar",
    "logo":"./assets/rar_logo.png"
    },
    {"id":6,
    "title":"JWT Authentication in ASP.NET Core",
    "path":"./assets/my courses/angular and asp.net core/JWT token authentication in ASP.NET Core 2.1 with Visual Studio 2017.pdf",
    "logo":"./assets/pdf_logo.png"
    },
    {"id":7,
    "title":"Angular Authentication",
    "path":"./assets/my courses/angular and asp.net core/Angular Authentication.pdf",
    "logo":"./assets/pdf_logo.png"
    }


    ]},
    {"id":2, "title":"Cloud Computing", "logo":"./assets/aws_logo.png","chapitres":[

      {"id":1,
      "title":"Cloud Computing _ SESAME",
      "path":"./assets/my courses/cloud computing/Cloud Computing _ SESAME.rar",
      "logo":"./assets/rar_logo.png"
      }

    ]},
    {"id":3, "title":"Administration Systèmes", "logo":"./assets/linux_logo.png",
    
    "chapitres":[

      {"id":1,
      "title":"Administration Systèmes _ SESAME",
      "path":"./assets/my courses/administration systèmes/Administration Systèmes _ SESAME.zip",
      "logo":"./assets/zip_logo.png"
      }

    ]},

    {"id":4, "title":"Problem Solving", "logo":"./assets/problem_solving_logo.png",
    
    "chapitres":[

      {"id":1,
      "title":"Computer Science Programming",
      "path":"./assets/my courses/problem solving/Computer Science Programming.rar",
      "logo":"./assets/rar_logo.png"
      }

    ]},

  ];
  constructor() { }
}

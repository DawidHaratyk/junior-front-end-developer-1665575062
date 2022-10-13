import completedTask from "../assets/completedTask.svg";
import activeTask from "../assets/activeTask.svg";
import unlockedTask from "../assets/unlockedTask.svg";

export const statusIconsList = {
  completed: completedTask,
  active: activeTask,
  unlocked: unlockedTask,
};

export const tasksData = [
  {
    title: "Application Setup",
    status: "completed",
    businessContexts: [
      {
        title: "Application has been accepted  🎉  🙌",
        author: "Kirsten Aniston",
        created_at: "2022-08-15",
        content: [
          "Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉 🙌",
          "You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.",
          "Here's the project overview: You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.",
        ],
        status: "new",
      },
      {
        title: "New sprint, tasks and intro information.",
        author: "Olga Nelson",
        created_at: "2022-09-20",
        content: [
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        ],
        status: "current",
      },
      {
        title: "Application has been accepted  🎉  🙌",
        author: "Olga Nelson",
        created_at: "2022-08-15",
        content: [
          "Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉 🙌",
          "You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.",
          "Here's the project overview: You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.",
        ],
        status: "old",
      },
    ],
  },
  {
    title: "Static Books List",
    status: "completed",
    businessContexts: [
      {
        title: "Application has been accepted  🎉  🙌",
        author: "Kirsten Aniston",
        created_at: "2022-08-15",
        content: [
          "Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉 🙌",
          "You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.",
          "Here's the project overview: You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.",
        ],
        status: "new",
      },
      {
        title: "New sprint, tasks and intro information.",
        author: "Olga Nelson",
        created_at: "2022-09-20",
        content: [
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        ],
        status: "new",
      },
      {
        title: "Application has been accepted  🎉  🙌",
        author: "Olga Nelson",
        created_at: "2022-08-15",
        content: [
          "Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉 🙌",
          "You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.",
          "Here's the project overview: You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.",
        ],
        status: "new",
      },
    ],
  },
  {
    title: "Administration Panel",
    status: "completed",
    businessContexts: [
      {
        title: "Application has been accepted  🎉  🙌",
        author: "Kirsten Aniston",
        created_at: "2022-08-15",
        content: [
          "Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉 🙌",
          "You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.",
          "Here's the project overview: You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.",
        ],
        status: "new",
      },
      {
        title: "New sprint, tasks and intro information.",
        author: "Olga Nelson",
        created_at: "2022-09-20",
        content: [
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        ],
        status: "new",
      },
      {
        title: "Application has been accepted  🎉  🙌",
        author: "Olga Nelson",
        created_at: "2022-08-15",
        content: [
          "Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉 🙌",
          "You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.",
          "Here's the project overview: You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.",
        ],
        status: "new",
      },
    ],
  },
  {
    title: "Connect Admin with Frontend",
    status: "active",
    businessContexts: [
      {
        title: "Application has been accepted  🎉  🙌",
        author: "Kirsten Aniston",
        created_at: new Date("2022", "08", "15", "11", "20"),
        content: [
          "Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉 🙌",
          "You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.",
          "Here's the project overview: You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.",
        ],
        status: "new",
      },
      {
        title: "New sprint, tasks and intro information.",
        author: "Olga Nelson",
        created_at: new Date("2022", "08", "15", "11", "20"),
        content: [
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        ],
        status: "current",
      },
      {
        title: "Application has been accepted  🎉  🙌",
        author: "Olga Nelson",
        created_at: new Date("2022", "08", "15", "11", "20"),
        content: [
          "Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉 🙌",
          "You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.",
          "Here's the project overview: You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.",
        ],
        status: "old",
      },
    ],
  },
  {
    title: "Book Review Feature",
    status: "unlocked",
    businessContexts: [
      {
        title: "Application has been accepted  🎉  🙌",
        author: "Kirsten Aniston",
        created_at: "2022-08-15",
        content: [
          "Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉 🙌",
          "You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.",
          "Here's the project overview: You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.",
        ],
        status: "new",
      },
      {
        title: "New sprint, tasks and intro information.",
        author: "Olga Nelson",
        created_at: "2022-09-20",
        content: [
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        ],
        status: "new",
      },
      {
        title: "Application has been accepted  🎉  🙌",
        author: "Olga Nelson",
        created_at: "2022-08-15",
        content: [
          "Hello! My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉 🙌",
          "You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.",
          "Here's the project overview: You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.",
        ],
        status: "new",
      },
    ],
  },
];

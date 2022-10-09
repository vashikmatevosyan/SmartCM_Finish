
export const project = [{
  id: "1",
  title: "Type 1",
  children: [],
}, {
  id: "2",
  title: "Type 2",
  children: [],
}, {
  id: "3",
  title: "Type 3",
  children: [],
}, {
  id: "4",
  title: "Type 4",
  children: [],
}, {
  id: "5",
  title: "Type 5",
  children: [],
},
  {
    id: "6",
    title: "Type 6",
    children: [],
  }];

export const duration = ["15 minute", "30 minute", "1 hours", "2 hours", "3hours", "Half day"];

export const eventTypes = [
  {
    id: "7",
    title: "Meeting",
    children: [],
  },
  {
    id: "8",
    title: "Teambuilding",
    children: [],
  },
  {
    id: "9",
    title: "Trainings",
    children: [],
  },
  {
    id: "10",
    title: "Events",
    children: [],
  },
];

export const participators = [
  {
    id: "11",
    title: "Adam Benson",
    children: [],
  },
  {
    id: "12",
    title: "Sarah Green",
    children: [],
  },
  {
    id: "13",
    title: "Adam Brown",
    children: [],
  },
  {
    id: "14",
    title: "Fred Able",
    children: [],
  },
  {
    id: "16",
    title: "Adam Brown",
    children: [],
  },
  {
    id: "17",
    title: "Clare Donaldson",
    children: [],
  },
  {
    id: "18",
    title: "Ben Adams",
    children: [],
  },
  {
    id: "20",
    title: "Donald Clarkson",
    children: [],
  }];

export const room = [
  {
    id: "20",
    title: "Meeting rooms",
    children: [],
  },
  {
    id: "21",
    title: "Meeting rooms 2",
    children: [],
  },
  {
    id: "21",
    title: "Meeting rooms 3",
    children: [],
  },
];

export const organizer = [
  {
    id: "22",
    title: "Frontend team",
    children: [{
      id: "11",
      title: "Adam Benson",
      children: [],
    },
      {
        id: "12",
        title: "Sarah Green",
        children: [],
      },
      {
        id: "13",
        title: "Adam Brown",
        children: [],
      },
      {
        id: "14",
        title: "Fred Able",
        children: [],
      }],
  },
  {
    id: "23",
    title: "Backend team",
    children: [{
      id: "11",
      title: "Adam Benson",
      children: [],
    },
      {
        id: "12",
        title: "Sarah Green",
        children: [],
      },
      {
        id: "13",
        title: "Adam Brown",
        children: [],
      },
      {
        id: "14",
        title: "Fred Able",
        children: [],
      }],
  },
  {
    id: "24",
    title: "Mobile team",
    children: [{
      id: "11",
      title: "Adam Benson",
      children: [],
    },
      {
        id: "12",
        title: "Sarah Green",
        children: [],
      },
      {
        id: "13",
        title: "Adam Brown",
        children: [],
      },
      {
        id: "14",
        title: "Fred Able",
        children: [],
      }],
  },
  {
    id: "25",
    title: "Frontend team",
    children: [{
      id: "11",
      title: "Adam Benson",
      children: [],
    },
      {
        id: "12",
        title: "Sarah Green",
        children: [],
      },
      {
        id: "13",
        title: "Adam Brown",
        children: [],
      },
      {
        id: "14",
        title: "Fred Able",
        children: [],
      }],
  },
];


export const bookLeave = [
  {
    id: "100",
    title: "Hourly leave",
    children: [],
  },
  {
    id: "101",
    title: "Day off",
    children: [],
  },
  {
    id: "102",
    title: "Work remotely",
    children: [],
  },
  {
    id: "103",
    title: "Vacation",
    children: [],
  },
];


export let book = [
  {
    id: 120,
    type: "Vacation",
    title: "Vacation Request",
    date: "May 20,2022",
    to: "May 24,2022",
    comment: '',
    description: 'when an unknown printer took a galley of type and scrambled it to make a type',
    accepted: true,
    read: true,
    user: {
      fName: "Ann",
      lName: "Kodi",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
  },
  {
    id: 123,
    type: "Vacation",
    title: "Vacation Request",
    date: "May 20,2022",
    to: "May 24,2022",
    accepted: false,
    read: true,
    comment: '',
    description: ' when an unknown printer took a galley of type and scrambled it to make a type',
    user: {
      fName: "Ann",
      lName: "Kodi",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    },
  },
  {
    id: 124,
    type: "Hourly",
    title: "Hourly Leave Request",
    date: "May 20,2022",
    time: "14:30 - 15:30",
    accepted: true,
    read: false,
    comment: '',
    description: ' when an unknown printer took a galley of type and scrambled it to make a type',
    user: {
      fName: "Ann",
      lName: "Kodi",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    },
  },
  {
    id: 125,
    type: "Hourly",
    title: "Hourly Leave Request",
    date: "May 20,2022",
    time: "14:30 - 15:30",
    accepted: false,
    read: false,
    comment: '',
    description: ' when an unknown printer took a galley of type and scrambled it to make a type',
    user: {
      fName: "Ann",
      lName: "Kodi",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    },
  },
  {
    id: 127,
    type: "Day",
    title: "Day Off Request",
    date: "May 20,2022",
    accepted: false,
    read: true,
    comment: '',
    description: ' when an unknown printer took a galley of type and scrambled it to make a type',
    user: {
      fName: "Ann",
      lName: "Kodi",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    },
  },
  {
    id: 128,
    type: "Day",
    title: "Day Off Request",
    date: "May 20,2022",
    accepted: true,
    read: false,
    comment: '',
    description: ' when an unknown printer took a galley of type and scrambled it to make a type',
    user: {
      fName: "Ann",
      lName: "Kodi",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    },
  },
  {
    id: 129,
    type: "Work",
    title: "Work Remotely Request",
    date: "May 20,2022",
    accepted: false,
    read: false,
    comment: '',
    description: ' when an unknown printer took a galley of type and scrambled it to make a type',
    user: {
      fName: "Ann",
      lName: "Kodi",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    },
  },
  {
    id: 130,
    type: "Work",
    title: "Work Remotely Request",
    date: "May 20,2022",
    accepted: true,
    read: true,
    comment: '',
    description: ' when an unknown printer took a galley of type and scrambled it to make a type',
    user: {
      fName: "Ann",
      lName: "Kodi",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    },
  },
];

export const Week = [
  {quarter: 1, earnings: 840, day: "M"},
  {quarter: 2, earnings: 690, day: "M"},
  {quarter: 3, earnings: 570, day: "M"},
  {quarter: 4, earnings: 690, day: "M"},
  {quarter: 5, earnings: 850, day: "M"},
  {quarter: 6, earnings: 540, day: "M"},
  {quarter: 7, earnings: 330, day: "M"},
];

export const Progress = [
  {x: 1, y: 26.5},
  {x: 1.3, y: 26.45},
  {x: 1.5, y: 26.7},
  {x: 1.58, y: 26.75},
  {x: 2.1, y: 27},
  {x: 3, y: 27.8},
  {x: 3.48, y: 26.9},
  {x: 3.69, y: 26.73},
  {x: 4.3, y: 26.2},
  {x: 4.7, y: 26.42},
  {x: 4.78, y: 26.46},
  {x: 5, y: 26.45},
  {x: 5.5, y: 26.7},
  {x: 6, y: 26.1},
  {x: 7, y: 27},
];

export const Annual = [
  {quarter: 1, earnings: 20, day: 7, Vacation: 4, Hours: 1.4},
  {quarter: 2, earnings: 20, day: 9, Vacation: 1.4, Hours: 4},
  {quarter: 3, earnings: 20, day: 9, Vacation: 1.4, Hours: 4},
  {quarter: 4, earnings: 20, day: 11, Vacation: 4, Hours: 0.001},
  {quarter: 5, earnings: 20, day: 9, Vacation: 1.4, Hours: 4},
  {quarter: 6, earnings: 20, day: 11, Vacation: 4, Hours: 0.001},
  {quarter: 7, earnings: 20, day: 7, Vacation: 4, Hours: 1.4},
  {quarter: 8, earnings: 20, day: 2, Vacation: 5, Hours: 11},
  {quarter: 9, earnings: 20, day: 7, Vacation: 4, Hours: 1.4},
  {quarter: 10, earnings: 20, day: 7, Vacation: 4, Hours: 1.4},
  {quarter: 11, earnings: 20, day: 2, Vacation: 5, Hours: 11},
  {quarter: 12, earnings: 20, day: 2, Vacation: 5, Hours: 11},
];


export const historyTask= [
  {quarter: 1, y: 2.5, k: -1},
  {quarter: 1.4, y: 3.6, k: -1},
  {quarter: 2, y: 1.6, k: 2.1},
  {quarter: 2.4, y: 2.6, k: -2},
  {quarter: 2.8, y: 1.3, k: 2.1},
  {quarter: 3, y: 2.4, k: 2},
  {quarter: 3.2, y: 2.4, k: 1.9},
  {quarter: 3.4, y: 1.1, k: 3.8},
  {quarter: 3.8, y: 1.8, k: 2},
  {quarter: 4, y: 2.8, k: 1.9},
  {quarter: 4.3, y: 2, k: 1},
  {quarter: 4.6, y: 3.2, k: 1},
  {quarter: 4.8, y: 3.4, k: 0.4},
  {quarter: 5, y: 3, k: 0.9},
  {quarter: 5.2, y: 2.8, k: 0},
  {quarter: 5.4, y: 2.6, k: 0},
  {quarter: 5.6, y: 2.5, k: 0},
  {quarter: 5.9, y: 1.1, k: 4.2},
  {quarter: 6.2, y: 2.2, k: 4.3},
  {quarter: 6.4, y: 2.2, k: 4.4},
  {quarter: 6.5, y: 1.9, k: 3.3},
  {quarter: 6.7, y: 2, k: 3},
  {quarter: 6.9, y: 2, k: 3.7},
  {quarter: 7.5, y: 1, k: 7},
];

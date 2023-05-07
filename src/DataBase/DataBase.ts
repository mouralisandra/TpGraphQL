interface IdentifiableById {
  id: number;
}

interface CV extends IdentifiableById {
  name: string;
  age: string;
  job: string;
  skills: Skill[];
  user: User;
}

interface Skill extends IdentifiableById {
  designation: string;
  }

interface User extends IdentifiableById {
  name: string;
  email: string;
  role: Role;

}

enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

const skills: Skill[] = [
  { id: 1, designation: "NestJs"},
  { id: 2, designation: "ReactJs"},
  { id: 3, designation: "GraphQL" },
  { id: 4, designation: "Techwall"},
];

const users: User[] = [
  {
    id: 1,
    name: "Sandra Mourali",
    email: "sandra.mourali@insat.ucar.tn",
    role: Role.ADMIN,
    
  },
  {
    id: 2,
    name: "Mariem Ksontini ",
    email: "mariem.ksontini@insat.ucar.tn",
    role: Role.USER,
   
  },
  {
    id: 3,
    name: "Sofienne Azzabi",
    email: "sofienne.Azzabi@insat.ucar.tn",
    role: Role.USER,
   
  },
  {
    id: 4,
    name: "Eya Ridene",
    email: "Eya.ridene@insat.ucar.tn",
    role: Role.USER,
   
  },
];

const cvs: CV[] = [
  {
    id: 1,
    name: "cv1",
    age: "21",
    job: "software engineer Student",
    skills: [skills[0]],
    user: users[0],
  },
  {
    id: 2,
    name: "cv2",
    age: "21",
    job: "software engineer Student",
    skills: [skills[1]],
    user: users[1],
  },
  {
    id: 3,
    name: "cv3",
    age: "21",
    job: "software engineer Student",
    skills:[skills[0],skills[2]],
    user: users[2],
},
{
    id: 4 ,
    name: "cv4",
    age: "21",
    job: "software engineer Student",
    skills:[skills[3]],
    user: users[0],
},

];


export const db = {
  skills,
  users,
  cvs,
};

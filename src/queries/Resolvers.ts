import { GraphQLError } from "graphql";

//Les CVs
export const  CV= {
        user: ({user}, arg1, {db}) => {
            /* const user = db.users.find((user) => user.id === arg1.user.id);
            if (!user) {
                throw new Error(`User with ID ${arg1.userId} not found`);
            }*/
            return user;
        },
        skills: ({skills}, arg2, { db }) => {
            return skills;
        },
    }

//Les requêtes:
    export const Query = {
        CVsFetch: (arg1, arg2, { db }) => {
            return db.cvs;
        },
        CVByID: (arg1, { id }, { db }) => {
          
            const foundCV = db.cvs.find((cv) => cv.id === id);
            if (!foundCV) throw new GraphQLError("CV not found");
            return foundCV;
        },
    
        SkillsFetch: (arg1, arg2, { db }) => {
            return db.skills;
        },
    }

//Les Skills:
    export const  Skill= {
    
        cvs: ({ id } , arg2, { db }) => {
    
            const cvfound = db.cvs.filter((cv)=>{
                return include(cv.skills,"id",id);
            } )
            return cvfound;
        },
    }
    
    export function include (array ,attribut = "",value){
        return array.some((element) => element[attribut] == value );
    }
    

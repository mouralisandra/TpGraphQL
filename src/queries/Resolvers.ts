import { GraphQLError } from "graphql";

//Les CVs
export const  CV= {
        user: ({user}, parent, {db}) => {
            /* const user = db.users.find((user) => user.id === parent.user.id);
            if (!user) {
                throw new Error(`User with ID ${parent.userId} not found`);
            }*/
            return user;
        },
        skills: ({skills}, args, { db }) => {
            return skills;
        },
    }

//Les requêtes:
    export const Query = {
        CVsFetch: (parent, args, { db }) => {
            return db.cvs;
        },
        CVByID: (parent, { id }, { db }) => {
          
            const foundCV = db.cvs.find((cv) => cv.id === id);
            if (!foundCV) throw new GraphQLError("CV not found");
            return foundCV;
        },
    
        SkillsFetch: (parent, args, { db }) => {
            return db.skills;
        },
    }

//Les Skills:
    export const  Skill= {
    
        cvs: ({ id } , args, { db }) => {
    
            const cvfound = db.cvs.filter((cv)=>{
                return include(cv.skills,"id",id);
            } )
            return cvfound;
        },
    }
    
    export function include (array ,attribut = "",value){
        return array.some((element) => element[attribut] == value );
    }
    

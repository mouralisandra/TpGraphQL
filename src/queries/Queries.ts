import { GraphQLError } from "graphql";
//Les CVs
export const  CV= {
        user: ({user}, _, {db}) => {
            return user;
        },
        skills: ({skills}, __, { db }) => {
            return skills;
        },
    }

//Les requêtes:
    export const Query = {
        CVsFetch: (_, __, { db }) => {
            return db.cvs;
        },
        CVByID: (_, { id }, { db }) => {
          
            const foundCV = db.cvs.find((cv) => cv.id === id);
            if (!foundCV) throw new GraphQLError("CV not found 404 error",
            {
                extensions: {
                    http: {
                        status: 404,
                        headers: {
                        "x-custom-header": "some-value",
                        },
                    },
                }
            });
            return foundCV;
        },
    
        SkillsFetch: (_, __, { db }) => {
            return db.skills;
        },
    }

//Les Skills:
    export const  Skill= {
    
        cvs: ({ id } , __, { db }) => {
    
            const cvfound = db.cvs.filter((cv)=>{
                return include(cv.skills,"id",id);
            } )
            return cvfound;
        },
    }
    
//Fonction de recherche:  
    export function include (array ,attribut = "",value){
        return array.some((element) => element[attribut] == value );
    }
    

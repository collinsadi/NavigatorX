const { NlpManager } = require('node-nlp');
const cleanTextFunction = require('../cleanText/clean');
const manager = new NlpManager({ languages: ['en'], /*forceNER: true,*/ nlu: { useNoneFeature: true } });


// DataSets
const maingate_to_shopping_complex_english = require('../Data/english/mainGate/shoppingComplex/maingate_to_Sc');
const answer_maingate_to_shopping_complex = require('../Data/english/mainGate/shoppingComplex/ans_maingate_to_sc');
const maingate_to_law_faculty_english = require('../Data/english/mainGate/law/maingate_to_law_fac');
const answer_maingate_to_law_faculty_english = require('../Data/english/mainGate/law/ans_maingate_to_law_fac');
const maingate_to_nddc_hostel = require('../Data/english/mainGate/nddcHostel/maingate_to_nddchostel');
const answer_maingate_to_nddc_hostel = require('../Data/english/mainGate/nddcHostel/ans_maingate_to_nddchostel');
const maingate_to_basket_ball = require('../Data/english/mainGate/basketballCourt/maingate_to_basket_ball');
const answer_maingate_to_basket_ball = require('../Data/english/mainGate/basketballCourt/ans_maingate_to_basket_ball');
const maingate_to_convocation_arena = require('../Data/english/mainGate/convocationArena/maingate_to_convocationArena');
const answer_maingate_to_convocation_arena = require('../Data/english/mainGate/convocationArena/ans_maingate_to_convocationArena');
const maingate_to_senate = require('../Data/english/mainGate/senateBuilding/maingate_to_senate');
const answer_maingate_to_senate = require('../Data/english/mainGate/senateBuilding/ans_maingate_to_senate');
const maingate_to_library = require('../Data/english/mainGate/centralLibrary/maingate_to_library');
const answer_maingate_to_library = require('../Data/english/mainGate/centralLibrary/ans_maingate_to_library');
const maingate_to_law_departments = require('../Data/english/mainGate/lawDepartments/maingate_to_law_departments');
const answer_maingate_to_law_departments = require('../Data/english/mainGate/lawDepartments/ans_maingate_to_law_departments');
const maingate_to_management_science = require('../Data/english/mainGate/management/maingate_to_management');
const answer_maingate_to_management_science = require('../Data/english/mainGate/management/ans_maingate_to_management');
const maingate_to_management_departments = require('../Data/english/mainGate/managementDepartments/maingate_to_management_departments');
const answer_maingate_to_management_departments = require('../Data/english/mainGate/managementDepartments/ans_maingate_to_management_departments');
const maingate_to_social_science = require('../Data/english/mainGate/socialScience/maingate_to_social_science');
const answer_maingate_to_social_science = require('../Data/english/mainGate/socialScience/ans_maingate_to_social_science');
const maingate_to_social_science_departments = require('../Data/english/mainGate/socialScienceDepartments/maingate_to_socialscience_departments');
const answer_maingate_to_social_science_departments = require('../Data/english/mainGate/socialScienceDepartments/ans_maingate_to_socialscience_departments');
const maingate_to_humanities = require('../Data/english/mainGate/humanities/maingate_to_humanities');
const answer_maingate_to_humanities = require('../Data/english/mainGate/humanities/ans_maingate_to_humanities');
const maingate_to_amphitheatre = require('../Data/english/mainGate/amphitheatre/maingate_to_amphitheatre');
const answer_maingate_to_amphitheatre = require('../Data/english/mainGate/amphitheatre/ans_maingate_to_amphitheatre');
const maingate_to_humanities_departments = require('../Data/english/mainGate/humanitiesDepartments/maingate_to_humanities_departments');
const answer_maingate_to_humanities_departments = require('../Data/english/mainGate/humanitiesDepartments/ans_maingate_to_humanities_departments');
const maingate_to_bank = require('../Data/english/mainGate/banks/maingate_to_bank');
const answer_maingate_to_bank = require('../Data/english/mainGate/banks/ans_maingate_to_bank');















// Adds the utterances and intents for the NLP
maingate_to_shopping_complex_english.forEach(prompt=>{
manager.addDocument('en', prompt.prompt, prompt.intent);
});
maingate_to_law_faculty_english.forEach(prompt=>{
manager.addDocument('en', prompt.prompt, prompt.intent);
});
maingate_to_nddc_hostel.forEach(prompt=>{
manager.addDocument('en', prompt.prompt, prompt.intent);
});
maingate_to_basket_ball.forEach(prompt=>{
manager.addDocument('en', prompt.prompt, prompt.intent);
});
maingate_to_convocation_arena.forEach(prompt=>{
manager.addDocument('en', prompt.prompt, prompt.intent);
});
maingate_to_senate.forEach(prompt=>{
manager.addDocument('en', prompt.prompt, prompt.intent);
});
maingate_to_library.forEach(prompt=>{
manager.addDocument('en', prompt.prompt, prompt.intent);
});
maingate_to_law_departments.forEach(prompt=>{
manager.addDocument('en', prompt.prompt, prompt.intent);
});
maingate_to_management_science.forEach(prompt=>{
manager.addDocument('en', prompt.prompt, prompt.intent);
});
maingate_to_management_departments.forEach(prompt=>{
manager.addDocument('en', prompt.prompt, prompt.intent);
});
maingate_to_social_science.forEach(prompt=>{
manager.addDocument('en', prompt.prompt, prompt.intent);
});
maingate_to_social_science_departments.forEach(prompt=>{
manager.addDocument('en', prompt.prompt, prompt.intent);
});
maingate_to_humanities.forEach(prompt=>{
manager.addDocument('en', prompt.prompt, prompt.intent);
});
maingate_to_amphitheatre.forEach(prompt=>{
manager.addDocument('en', prompt.prompt, prompt.intent);
});
maingate_to_humanities_departments.forEach(prompt=>{
manager.addDocument('en', prompt.prompt, prompt.intent);
});
maingate_to_bank.forEach(prompt=>{
manager.addDocument('en', prompt.prompt, prompt.intent);
});













//Answers for NLG Training
answer_maingate_to_shopping_complex.forEach(answer=>{
manager.addAnswer('en', answer_maingate_to_shopping_complex[0].intent, answer.answer );
});
answer_maingate_to_law_faculty_english.forEach(answer=>{
manager.addAnswer('en', answer.intent, answer.answer ); 
});
answer_maingate_to_nddc_hostel.forEach(answer=>{
manager.addAnswer('en', answer.intent, answer.answer ); 
});
answer_maingate_to_basket_ball.forEach(answer=>{
manager.addAnswer('en', answer.intent, answer.answer ); 
});
answer_maingate_to_convocation_arena.forEach(answer=>{
manager.addAnswer('en', answer.intent, answer.answer ); 
});
answer_maingate_to_senate.forEach(answer=>{
manager.addAnswer('en', answer.intent, answer.answer ); 
});
answer_maingate_to_library.forEach(answer=>{
manager.addAnswer('en', answer.intent, answer.answer ); 
});
answer_maingate_to_law_departments.forEach(answer=>{
manager.addAnswer('en', answer.intent, answer.answer ); 
});
answer_maingate_to_management_science.forEach(answer=>{
manager.addAnswer('en', answer.intent, answer.answer ); 
});
answer_maingate_to_management_departments.forEach(answer=>{
manager.addAnswer('en', answer.intent, answer.answer ); 
});
answer_maingate_to_social_science.forEach(answer=>{
manager.addAnswer('en', answer.intent, answer.answer ); 
});
answer_maingate_to_social_science_departments.forEach(answer=>{
manager.addAnswer('en', answer.intent, answer.answer ); 
});
answer_maingate_to_humanities.forEach(answer=>{
manager.addAnswer('en', answer.intent, answer.answer ); 
});
answer_maingate_to_amphitheatre.forEach(answer=>{
manager.addAnswer('en', answer.intent, answer.answer ); 
});
answer_maingate_to_humanities_departments.forEach(answer=>{
manager.addAnswer('en', answer.intent, answer.answer ); 
});
answer_maingate_to_bank.forEach(answer=>{
manager.addAnswer('en', answer.intent, answer.answer ); 
});









// Train and save the model.
const trainModel = async (input)=>{
        await manager.train();
        manager.save();
        const response = await manager.process('en', cleanTextFunction(input));
        return response
}

module.exports = trainModel;
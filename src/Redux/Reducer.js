const intialState = {
  data: {
    name: "as",
    petName: "fff",
    age: "2",
    email: "abdullah.saber.mustafa@gmail.com",
    currLocation: "aswan",
  },
  data2: {
    index: 2,
    name: "Birds",
    title: "Medical Emergencies and Concerns",
    details: "Time is of the essence when your dog is sick or injured.",
    title2: "In Case of Emergency",
    details2:
      "If you suspect that your dog has been injured or poisoned, contact a veterinarian immediately.",
    details3:
      "For quick reference, place the following emergency numbers in an easily visible and accessible place:",
    steps: [
      "Regular Veterinarian: Include your vet's name, number and address. If you are going out of town, call beforehand to authorize treatment and payment should something happen while you’re away.",
      "Emergency Veterinarian: Include the name, number and address of the closest 24-hour emergency vet.",
      "Emergency Contact: Include the name and phone number of a person who can be called if something happens to you.",
      "Medical Information: Include a list of critical medications, allergies and other essential medical information about your dog.",
    ],
  },
  lang: "en",
  otp: "7141",
};

export default function dataReducer(state = intialState, action) {
  switch (action.type) {
    case "STORE_DATA":
      return {
        ...state,
        data: action.payload,
      };
      break;
    case "STORE_DATA2":
      return {
        ...state,
        data2: action.payload,
      };
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        lang: action.payload,
      };
      break;
    case "SET_OTP":
      return {
        ...state,
        otp: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
}

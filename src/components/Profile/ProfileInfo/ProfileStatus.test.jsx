import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () =>{
    test("Show" , () =>{
        const component = create(<ProfileStatus status="Hi" />);
        const instance = component.getInstance;
        expect(instance.state.text).toBe("");
    })
}

)
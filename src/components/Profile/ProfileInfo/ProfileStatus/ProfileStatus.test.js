import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from './_ProfileStatus';

describe("ProfileStatus component test", () => {
   test("Status from props should be in the state", () => {
      const component = create(<ProfileStatus status="it-kamasutra.com" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("it-kamasutra.com");
   });

   test("After creation SPAN should be displayed", () => {
      const component = create(<ProfileStatus status="it-kamasutra.com" />);
      let root = component.root;
      let span = root.findByType("span");
      expect(span).not.toBeNull();
   });

   test("After creation INPUT shouldn't be displayed", () => {
      const component = create(<ProfileStatus status="it-kamasutra.com" />);
      let root = component.root;
      expect(() => root.findByType("input")).toThrow();
   });

   test("After creation SPAN should contains correct status", () => {
      const component = create(<ProfileStatus status="it-kamasutra.com" />);
      let root = component.root;
      let span = root.findByType("span");
      expect(span.children[0]).toBe("it-kamasutra.com");
   });

   test("INPUT should be displayed instead of SPAN", () => {
      const component = create(<ProfileStatus status="it-kamasutra.com" />);
      let root = component.root;
      let span = root.findByType("span");
      span.props.onClick();
      let input = root.findByType("input");
      expect(input.props.value).toBe("it-kamasutra.com");
   });

   test("After click SPAN shouldn't be displayed", () => {
      const component = create(<ProfileStatus status="it-kamasutra.com" />);
      let root = component.root;
      let span = root.findByType("span");
      span.props.onClick();
      expect(span).not.toBeNull();
   });

   test("Callback should be called", () => {
      const mockCallBack = jest.fn();
      const component = create(<ProfileStatus status="it-kamasutra.com" updateUserStatus={mockCallBack} />);
      const instance = component.getInstance();
      instance.deactivateEditMode();
      expect(mockCallBack.mock.calls.length).toBe(1);
   });
});
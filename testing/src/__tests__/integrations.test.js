import { mount } from "enzyme";
import Root from "../Root";
import App from "../components/App";
import moxios from "moxios";

beforeEach(() => {
  moxios.install();

  //Faking request
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [
      { name: "asdadasdasd" },
      { name: "asdadasdasd" },
      { name: "asdadasdasd" },
      { name: "asdadasdasd" },
      { name: "asdadasdasd" },
      { name: "asdadasdasd" },
      { name: "asdadasdasd" },
    ],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", (done) => {
  //Attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  //find the fetchComments button and click it
  wrapped.find(".fetch_comments").simulate("click");

  //Expect to find a list of comments!
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(7);

    done();
    wrapped.unmount();
  });
});

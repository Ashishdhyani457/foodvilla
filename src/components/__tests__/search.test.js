import { render, waitFor } from "@testing-library/react"
import Body from "../Body"
import { Provider } from "react-redux"
import store from "../../utils/store.js"
import { StaticRouter } from "react-router-dom/server"
import { RESTAURANT_DATA } from "../../mocks/data"
import "@testing-library/jest-dom"
global.fetch=jest.fn(()=>{
   return Promise.resolve({
        json:()=>{ Promise.resolve(RESTAURANT_DATA)
}
})
})
test("shimmer loded or not", () => {
    const body =
  render(    <StaticRouter> 
    <Provider store={store}> 
    <Body/> 
    </Provider>
    </StaticRouter>)
    // console.log(body)
    const shimmer=body.getByTestId("shimmer")
    expect(shimmer.children.length).toBe(10);
  
})



test("Restaurant should load on home page", async () => {
    const body =
  render(    <StaticRouter> 
    <Provider store={store}> 
    <Body/> 
    </Provider>
    </StaticRouter>)
    // console.log(body)
await waitFor(()=>{
    expect(body.getByTestId("search-btn"))
})
    const resList=body.getByTestId("res-list")
    expect(resList.children.length).toBe(0);

})

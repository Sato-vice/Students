import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache
} from "@apollo/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import DriversList from "./components/DriversList"
import Home from "./components/Home"
import Header from "./components/Header"
import TasksList from "./components/TasksList"
import TaskPage from "./components/TaskPage"
import Footer from "./components/Footer"


const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        drivers: {
          merge(existing, incoming) {
            return incoming
          }
        },
        tasks: {
          merge(existing, incoming) {
            return incoming
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: "http://localhost:3500/graphql",
  cache
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route>
                <Route index element={<Home />} />
              </Route>
              <Route path="drivers">
                <Route index element={<DriversList />}/>
              </Route>
              <Route path="tasks">
                <Route index element={<TasksList />}/>
              </Route>
              <Route path="/task/:id" element={<TaskPage />}/>
            </Routes>
          </div>
          <Footer />
        </Router>
        

      </ApolloProvider >
    </>
  );
}

export default App;

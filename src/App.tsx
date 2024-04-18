import { Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Layout from './layout/Layout';
import { AboutUs, ChurchMinistries, ChurchServices, ContactPage, Dashboard, Donation, Insights, Leadership, SingleInsight, UpcomingEvents, WatchSermons } from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    }
  }
})

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<Layout />}>
            {/* <Route index element={<Navigate replace to="" />} /> */}
            <Route path="" element={<Dashboard />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="our-leadership" element={<Leadership />} />
            <Route path="church-services" element={<ChurchServices />} />
            <Route path="church-ministries" element={<ChurchMinistries />} />
            <Route path="upcoming-events" element={<UpcomingEvents />} />
            <Route path="insights" element={<Insights />} />
            <Route path="insights/:id" element={<SingleInsight />} />
            <Route path="watch-sermons" element={<WatchSermons />} />
            <Route path="contact-us" element={<ContactPage />} />
            <Route path="give-to-gbcc" element={<Donation />} />

          </Route>
          {/* route not put */}
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
        <Toaster
          position='top-center'
          gutter={12}
          containerStyle={{
            margin: "8px"
          }}
          toastOptions={{
            success: {
              duration: 3000
            },
            error: {
              duration: 5000
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              // backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)"
            }
          }}
        />
      </QueryClientProvider>
    </>
  )
}

export default App

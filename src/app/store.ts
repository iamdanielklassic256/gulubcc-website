import { configureStore } from '@reduxjs/toolkit'
import contactReducer from '@/features/contact/contactSlice'
import sermonReducer from '@/features/sermons/sermonSlice'
import subscriberReducer from '@/features/subscribers/subscriberSlice'
import insightReducer from '@/features/insights/insightSlice'
import upcomingEventReducer from '@/features/upcoming-events/upcomingEventSlice'

export const store = configureStore({
	reducer: {
		contacts: contactReducer,
		sermons: sermonReducer,
		subscribers: subscriberReducer,
		insights: insightReducer,
		events: upcomingEventReducer
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
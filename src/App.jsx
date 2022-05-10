import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorBoundary from './components/ErrorBoundary'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Post = lazy(() => import('./pages/Post'))
const PostError = lazy(() => import('./pages/PostError'))

export default function App() {
    return (
        <Layout>
            <Suspense fallback={<div className="loader">loading...</div>}>
                <ErrorBoundary>
                    <Routes>
                        <Route index path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/post/:postId" element={<Post />} />
                        <Route path="*" element={<PostError />} />
                    </Routes>
                </ErrorBoundary>
            </Suspense>
        </Layout>
    )
}

import type { NextPage } from 'next'
import Home from 'src/features/home/Home'
import MainLayout from 'src/layout/main/MainLayout'

const Index: NextPage = () => {
    return (
        <MainLayout title="@cp949 개발자 노트">
            <Home />
        </MainLayout>
    )
}

export default Index

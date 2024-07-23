import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
  const loggedIn = {firstName: 'West'};

  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                  type="greeting"
                  title="welcome"
                  username={loggedIn?.firstName || 'Guest'}
                  subtext="Access and manage your Account"
                />

                <TotalBalanceBox 
                accounts={[]}
                totalBank={1}
                totalCurrentBalance={1250.35}

                />
            </header>

        </div>
    </section>
  )
}

export default Home
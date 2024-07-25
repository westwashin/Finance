import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = {firstName: 'Syuja', lastName: ' Krishandhie', email: 'syujazr@gmail.com'};

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
          RECENT TRANS
        </div>

        <RightSidebar 
          user={loggedIn}
          transactions={[]}
          banks={[{ currentBalance:123.50},{currentBalance:500.00}]}
        />
    </section>
  )
}

export default Home
import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
	const loggedIn = {
		firstName: 'Farzana',
		lastName: 'Asadi',
		email: 'farzana.dolatshahi@gmail.com',
	};
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn?.firstName || 'Guest'}
						subtext="Access and manage your account and translations efficiently."
					/>
					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1250.56}
					/>
				</header>
				RECENT TRANSACTION
			</div>
			<RightSidebar
				user={loggedIn}
				transactions={[]}
				banks={[{ currentBalance: 123.34 }, { currentBalance: 123.34 }]}
			/>
		</section>
	);
};

export default Home;

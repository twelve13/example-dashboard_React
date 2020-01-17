import App from 'next/app';
import Page from '../components/Page';

class DashboardApp extends App {
	render() {
		//this will be one of the pages in the pages folder
		const { Component } = this.props;
		return (
			<Page>
				<Component />
			</Page>
		)

	}
}

export default DashboardApp;
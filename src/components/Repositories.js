import React from 'react';
import Repository from './Repository';

export default class Repositories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repositories: null,
        }
        this.loadRepos = this.loadRepos.bind(this);
    }
    loadRepos(json) {
        this.setState({ repositories: json })
    }
    componentDidMount() {
        fetch("https://api.github.com/users/iambenkay/repos").then(r => r.json()).then(r => this.loadRepos(r)).catch(e => e)
    }
    render() {
        const { repositories } = this.state;
        return (
            <>
                <h1 className="text-white mt-3 text-center">Github Repositories</h1>
                <div className="row repos">
                    {repositories
                        ? repositories.map(repo => (
                            <Repository
                                key={repo.id}
                                name={repo.name}
                                url={repo.url}
                                full_name={repo.full_name}
                                pushed_at={repo.pushed_at}
                                language={repo.language} />
                        )
                        )
                        : ""}
                </div>
            </>
        );
    }
}
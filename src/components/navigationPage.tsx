import React, { Component } from 'react';


interface INavigationPageProps {
  category: string;
  name: string;
  file: string;
}
interface INavigationPageState {}

export default class NavigationPage extends Component<INavigationPageProps, INavigationPageState> {
  openPage(): void {
    if (this.props.category === 'default') window.location.hash = '#/' + this.props.file.slice(0, -3);
    else window.location.hash = '#/' + this.props.category + this.props.file.slice(0, -3);

    window.location.reload();
  }

  render(): JSX.Element {
    return (
      <div className='navigation-page'>
        <div className='navigation-page-name' onClick={() => this.openPage()}>{this.props.name}</div>
      </div>
    );
  }
}

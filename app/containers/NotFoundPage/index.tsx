/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { push, RouterAction} from 'react-router-redux';

import messages from './messages';
import { FormattedMessage } from 'react-intl';

interface INotFoundProps {
  dispatch?: (action: RouterAction) => void;
}

export class NotFound extends React.Component<INotFoundProps, {}> {

  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  private redirect() {
    this.props.dispatch(push('/'));
  }

  public render() {
    return (
      <article>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <button
          onClick={this.redirect}
        >
          <FormattedMessage {...messages.rootButton} />
        </button>
      </article>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default connect()(NotFound);

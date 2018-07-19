import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import Post from './Post';
import { timeSince } from './utils';

class App extends Component {
  state = {
    posts: [
      {
        avatar: 'dicaprio.jpg',
        name: 'Diego Schell Fernandes',
        date: timeSince(new Date() - 180000),
        content:
          'Lorem ipsum odio torquent ut cubilia litora arcu fringilla hac, accumsan iaculis sollicitudin dui ligula porttitor suspendisse consequat dapibus, pretium tristique ligula pulvinar aliquet quisque interdum urna. consequat sapien vivamus vitae turpis diam habitant porttitor feugiat porta, aliquet vel nisl nisi suscipit luctus id vel, dui maecenas neque leo lectus nostra semper ultricies. magna velit sem ut conubia volutpat ullamcorper per quam, orci purus mattis semper vestibulum aliquet bibendum, convallis urna hac ut nulla himenaeos mi pellentesque, erat fringilla suspendisse mauris mollis semper. lacus convallis tempor vel viverra hendrerit blandit id lorem, varius ante rhoncus potenti aliquam ante magna, neque molestie scelerisque donec varius torquent risus. ',
      },
      {
        avatar: 'emma.jpg',
        name: 'Rubia Savolksi',
        date: timeSince(new Date() - 600000),
        content:
          'Vehicula donec quisque pretium quisque ligula, suspendisse non quis ultricies, ullamcorper rhoncus sem senectus. rhoncus maecenas placerat tempor viverra ultrices dapibus justo sodales at adipiscing condimentum nec diam suscipit, arcu maecenas magna ultricies tristique dapibus ad ante at massa turpis nisl porta. eget varius porta facilisis tincidunt ipsum nec donec, gravida suspendisse hendrerit facilisis lobortis quis, tempus ut nisi vivamus arcu hac. ',
      },
      {
        avatar: 'gal.jpg',
        name: 'Mr. Mustache',
        date: timeSince(new Date() - 1200000),
        content:
          'Magna eleifend est platea accumsan dapibus, congue adipiscing aliquam hac cras pretium, luctus dapibus luctus eget. consectetur tortor aliquam tincidunt quisque dictumst proin consequat laoreet himenaeos accumsan, semper nibh euismod a sociosqu eget senectus platea purus ante, lacinia phasellus mi non vulputate fusce hac ut augue.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        {posts.map(post => <Post key={post.name} data={post} />)}
      </div>
    );
  }
}

export default App;

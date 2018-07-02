# react-comp-children

A react component that makes easy to select items to be mounted dynamically.

#### Installation
```sh
npm install --save react-comp-children
```

#### Examples
- Activate one of children
```JSX
import Children from 'react-comp-children';
...
render() {
    const items = [<A />, <B />, <C />];
    return (
        <div>
            <Children items={ items } active={ 1 } />
        </div>
    );
}
...
```

- for array items
```JSX
import Children from 'react-comp-children';
...
render() {
    const items = [<A />, <B />, <C />];
    return (
        <div>
            <Children items={ items } active={ [0, 2] } />
        </div>
    );
}
...
```

- for object items
```JSX
import Children from 'react-comp-children';
...
render() {
    const items = {
        a: <A />,
        b: <B />,
        c: <C />,
    };
    return (
        <div>
            <Children items={ items } active={ ['a', 'b'] } />
        </div>
    );
}
...
```

#### Dependencies
* [prop-types](https://www.npmjs.com/package/prop-types)

```sh
$ npm install --production
$ NODE_ENV=production node app
```

License
----
MIT

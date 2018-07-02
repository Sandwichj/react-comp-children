# react-comp-children

A react component that makes easy to select items to be mounted dynamically.

### Installation
```sh
npm install --save react-comp-children
```

### Examples
#### Activate one of children
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
equals to
```JSX
...
    <div>
        <B />
    </div>
...
```

#### for array items - inline
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
equals to
```JSX
...
    <div>
        <A /><C />
    </div>
...
```
#### for array items - block
```JSX
import Children from 'react-comp-children';
...
render() {
    return (
        <div>
            <Children active={ [0, 2] }>
                <A />
                <B />
                <C />
            </Children>
        </div>
    );
}
...
```
equals to
```JSX
...
    <div>
        <A /><C />
    </div>
...
```

#### for object items
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
equals to
```JSX
...
    <div>
        <A /><B />
    </div>
...
```

### Dependencies
* [prop-types](https://www.npmjs.com/package/prop-types)

License
----
MIT

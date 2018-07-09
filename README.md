# react-comp-children

A react component that makes easy to mount children dynamically.

### Installation
```sh
npm install --save react-comp-children
```

### Examples
#### Activate one of children
```js
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
```js
...
    <div>
        <B />
    </div>
...
```

#### for array items - inline
```js
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
```js
...
    <div>
        <A /><C />
    </div>
...
```
#### for array items - block
```js
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
```js
...
    <div>
        <A /><C />
    </div>
...
```

#### for object items
```js
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
```js
...
    <div>
        <A /><B />
    </div>
...
```

License
----
MIT

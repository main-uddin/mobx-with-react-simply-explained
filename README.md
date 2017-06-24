# mobx-with-react-simply-explained

## Gist

```javascript
create-react-app myapp
```

we will create a ```.js``` file inside ```src``` folder where all of our components reside.

Like --- ```Store.js```

Inside ```Store.js``` we are going to create an object named Store. This Store object will hold different properties.

Like

```javascript
let Store = {
  name: Zidane,
  country: France
}
```

Here Store object has 2 properties -- name , country.

Now these properties will be used in different components of our application as data.

Wrapping the ```Store``` object with ```observable()``` function which is provided by ```mobx``` module

```javascript
let Store = observable({
  name: Zidane,
  country: France
})
```

```javascript
//exporting the Store object
export default Store
```


Now all the components will get access to the ```Store``` object by importing it

```javascript
import Store from './Store'
```

We can update a speceific property of ```Store``` object from inside of one of the components.

Like
```javascript
Store.name = 'Zinedine Zidane' 
```

*And now ```Store.name``` will get updated throughout all the components which have used this specific property as well.
So those components will be re-rendered too.*

**This is the magic of mobX !**



## Details

When we have lots of components who depend on one another, it becomes pretty difficult to keep track of the data.

Data transferring from child to parent. Parent to child. Pretty frustrating !

So we use state management.

MobX is a pretty simple and awesome state manegment. But before talking about that ,

***What ```setState()``` does ?***

Whenever we run ```setState()``` , the render function runs again. And our UI gets updated. 
In setState function we change the data, update it.

First we initialize the state and then use ```setState()``` whenever necessary to update data.

Like

```javascript
this.state = {
  name: 'Messi'
}
```

Say, there is a ```button``` and if you click the ```button``` it shows you the full name.

So ```onClick``` we do 

```javascript
this.setState({
  name: 'Lionel Messi'
})
```


Before, the following ```JSX``` showed up as 'Messi'

```JSX
<div> {this.state.name} </div> 
```

Later ```onClick``` this becomes 'Lionel Messi'


Now we are not going to use ```setState()``` anymore. We will use mobX instead. For this particular example we could do this

```javascript
import {observable} from 'mobx'

Store = observable({
  name: 'Messi'
})
```

So ```onClick``` we do

```javascript
Store.name = 'Lionel Messi'
```

Simple as that , updating an object property.

And while exporting we have to wrap the component with ```observer()``` function
which is provided by ```'mobx-react'``` module.
So that we can see the change.

```javascript
import {observer} from 'mox-react'

export default observer(App) // App is your component name
```


**Allright this doesn't show anything yet. Lets get to the next example and you will see the beauty of mobX.**

## Final Example

![myapp](https://user-images.githubusercontent.com/19225595/27484688-f6552ff2-584b-11e7-92e3-8a9ce86fb2fe.png)

Clicking ```+``` button will increase the value by 1.
Clicking ```-``` button will do the opposite.


For building this, we have some components here

![image](https://user-images.githubusercontent.com/19225595/27220303-8419969e-52a6-11e7-8a89-d5de1b35c4bd.png)


Inside ```Store.js``` we have

![image](https://user-images.githubusercontent.com/19225595/27216924-9384dede-5299-11e7-8e34-540de1c53aa6.png)

See in ```IncreaseByOne.js``` component we are importing the ```Store``` object. And then increasing the value of
```counter``` property whenever the ```button``` is clicked.

![image](https://user-images.githubusercontent.com/19225595/27218706-ecadbb64-52a0-11e7-94b0-a1787d5a381b.png)

Similarly we are decreasing the ```Store.counter``` variable here in ```DecreaseByOne.js```

![image](https://user-images.githubusercontent.com/19225595/27218870-7a341802-52a1-11e7-9b31-fb597118e2cc.png)

Because of ```observable()``` function```Store.counter``` is changgin universally.

And to see the change in a component we have to wrap the component with ```observer()``` function.

![image](https://user-images.githubusercontent.com/19225595/27218997-e6b967c0-52a1-11e7-8929-a53cc732202c.png)

Finally this is our ```App.js``` component

![image](https://user-images.githubusercontent.com/19225595/27219102-4086c00e-52a2-11e7-82f9-e14fe2787ba9.png)

And our enterprise level appl

![mob-test](https://user-images.githubusercontent.com/19225595/27219746-9afa95cc-52a4-11e7-8a99-e30daa547a09.gif)

Now this is just a very simple start. There are other cool features in mobX. Check out the [official documentation](https://mobx.js.org/) and [good practices](https://www.reddit.com/r/reactjs/comments/6ef36w/best_way_to_learn_mobx/) to use mobX with React.


[Final Example Demo](https://srsajjad.github.io/mobx-with-react-simply-explained/)

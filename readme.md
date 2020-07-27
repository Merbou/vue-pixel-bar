# vue-pixel-bar
>It's a vue component that will progress to a target number at a specified duration

 [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/) [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) [![minified](https://badgen.net/bundlephobia/min/vue-pixel-bar@1.0.0)](https://bundlephobia.com/result?p=vue-pixel-bar@1.0.0) [![gzip](https://badgen.net/bundlephobia/minzip/vue-pixel-bar@1.0.0)](https://bundlephobia.com/result?p=vue-pixel-bar@1.0.0) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/Merbou/vue-pixel-bar) [![npm](https://img.shields.io/npm/v/vue-pixel-bar.svg)](https://www.npmjs.com/package/vue-pixel-bar)
 
 vue-pixel-bar is a dependency-free, lightweight vue component that can be overwrited by yourself.
 Css bar Made by Aleks
### How to use?
```bash
npm install vue-pixel-bar
```


### Example

```vue
<template>
  <pixel-bar :value="1900" :maxValue="4000" :duration='2000' :play='true'/>
</template>

<script>
  import pixelBar from 'vue-pixel-bar';
  export default {
    components: { pixelBar },
  }
</script>
```

### Options
|    Property    |    Description   |   type   |	default	|
| -----------------  | ---------------- | :--------: | :----------: |
| value       | the value you want to end at |Number| 1900 |
| maxValue         | the value you want to progress at |Number | 2000 |
| duration  | duration in millisecond | Number | 4000 |
| play     | when mounted it will not autoplay without  | Boolean | false |

### Slots
| slot Name | Description   |props|
| -----------------  | ---------------- | :--------: |
|    default    | Writing on the progress bar |  return current progress value |


## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License
# Welcome
 
The objective of this document is to give you an idea about my coding styles/preferences/techniques. Please give it a read before jumping to the code samples you'll find here.

### Preferred tools

The following libraries/packages are my favorites. The main reason of why I use them is because of their simplicity. Writing code with them is so easy, simple and fast, which at the end means easy to test and maintain.

1. Date manipulation: https://date-fns.org
2. State Management: https://recoiljs.org¿
3. Data-fetching: https://swr.vercel.app
4. HTTP calls: axios
5. Utilities: https://selfrefactor.github.io/rambdax

The fact that you don't find a library here doesn't mean I don't like it or I don't use it. It's just that I was gonna list every single library I've ever used you'll speend days reading.

### File Structure

When working on unopinionated projects, meaning, I'm pretty much free to define my own file/folder structure, this is what I usually do:

- entry_file
- src/
	- assets/
		- images-icons/
		- fonts/
	- screens/
		- components/ => if needed.
	- state/
	- components/
	- config/
	- helpers/
	- 
#### Explanation

- `screens/` is where I usually place my "pages", from there, I just import state, presentational components (buttons, inputs, lists), define "handlers".
- `components/` is where I place, as the name suggests, presentational componets. Here you would find all kind of "UI" components that are usually reused, like buttons, lists, inputs, "avatar", file pickers, Text (React-Native), animations, etc. If one component is specific to a single "screen",  I usually place it insinde `screens/<sample-screen>/components/`
- `config/` is where I place the app'a config files, for example secrets.
- `helpers` is where I add all kind of funcions that are reused all over the app, think about date formatting, input masking, form valitaions, packages/libraries abstractions. 
	- This last one is a crucial one for me. I don't like using the libraries directly on my components/screens. I usually create all kind of helpers for specific features, like push-notifications, file management, storage, atc. This way, if a library is deprecated, replaced I just need to refactor a single file.
	- One very important helper I usually create is called `api`. Depending on the project I may follow one of two paths: creating functions for each HTTP verb or define individual functions for each API call (keeping in my reusability).
- `assets` and `state` are self-explanatory.

### Exports and Imports

When working on JS/TS projects, I like using named exports for different reasons (of my liking):
1. This prevents name duplications, which helps in debugging. Imagine you have multiple `export default function MyComponent`, this kind of export will make it difficult for you to determine where the crash is rising.
2. keyboard shortcuts: I like using VIM, and with a single keyboard strikes I can jump to the desired file.
3. I can create an "index" file inside each folder that will allow me export and import from the "folder" name, like `import {Something, SomethingTwo} from '..path/to/components/'.

### Testing

Believe ir or not, I do like writing unit tests, you'll find some examples in the `__tests__` folder.

## Thanks for reading!

I just wanna say thank you for reaching this line, I reeally hope you liked what you read here, and hopefully, it will help you be a better coder. Cheers
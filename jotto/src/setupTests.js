import Enzyme, { shallow } from 'enzyme'; //enzyme for adapter, shallow for Virtual DOM out of them
import EnzymeAdapter from 'enzyme-adapter-react-16'; //

Enzyme.configure({ adapter: new EnzymeAdapter() }); //tell Enyzme to know this using react 16 through adapter.

//if this does not works, Try this command first:
// --setupFile ./src/setupTests.jsq
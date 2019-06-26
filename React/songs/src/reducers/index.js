import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'All Star', duration: '3:21' },
		{ title: 'I Want It That Way', duration: '3:33' },
		{ title: 'Africa', duration: '4:55' },
		{ title: 'Never Gonna Give You Up', duration: '3:35' }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});

export default class Likes {
	constructor() {
		this.likes = [];
	}

	addLike(id, title, author, img) {
		const like = { id, title, author, img };
		this.likes.push(like);
		// PERSIST DATA IN LOCALSTORAGE
		this.persistData();
		return like;
	}

	deleteLike(id) {
		const index = this.likes.findIndex(el => el.id === id);
		this.likes.splice(index, 1);
		// PERSIST DATA IN LOCALSTORAGE
		this.persistData();
	}

	isLiked(id) {
		return this.likes.findIndex(el => el.id === id) !== -1;
	}

	getNumLikes() {
		return this.likes.length;
	}

	persistData() {
		localStorage.setItem('likes', JSON.stringify(this.likes));
	}

	readStorage() {
		const storage = JSON.parse(localStorage.getItem('likes'));
		// RESTORE LIKES FROM LOCALSTORAGE
		if (storage) this.likes = storage;
	}
}
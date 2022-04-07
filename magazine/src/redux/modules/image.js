import { createAction, handleActions } from "redux-actions";
import produce from "immer";

import { storage, uploadBytes, ref, getDownloadURL } from "../../shared/firebase";

// 액션 타입
const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = " SET_PREVIEW";


// 액션 생성 함수
const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));


const initialState = {
  image_url: '',
  uploading: false,
  preview: null,
}

const uploadImageFB = (image) => {
  return function (dispatch, getState, { history }) {

    dispatch(uploading(true));

    const _upload = ref(storage, `images/${image.name}`);

    uploadBytes(_upload).then((snapshot) => {
      getDownloadURL(_upload).then((downloadURL) => {
        dispatch(uploadImage(downloadURL));
        console.log("downloadURL", downloadURL);

      })
    })
  }
}


// 리듀서
export default handleActions({
  [UPLOAD_IMAGE]: (state, action) => produce(state, (draft) => {
    draft.image_url = action.payload.image_url;
    draft.uploading = false;
  }),
  [UPLOADING]: (state, action) => produce(state, (draft) => {
    draft.uploading = action.payload.uploading;
  }),
  [SET_PREVIEW]: (state, action) => produce(state, (draft) => {
    draft.preview = action.payload.preview;

  })


}, initialState);



const actionCreaters = {
  uploadImage,
  uploadImageFB,
  setPreview,

}


export { actionCreaters };
import moment from "moment";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation"
import { actionNotif, useAuth, useNotif } from "../api";

const nofication = () => {
  const modaldelete = withReactContent(Swal)
  const { auth } = useAuth()
  const { notif, mutateNotif } = useNotif({ userId: auth?.data?.id })
  const [showCheckbox, setShowCheckbox] = useState(false)
  const [updateSelected, setUpdateSelected] = useState(false)
  const [selectedNotif, setSelectedNotif] = useState(null)

  useEffect(() => {
    let selectedBox = []
    let check = document.querySelectorAll('input[type="checkbox"]:checked')
    if (check.length > 0) {
      for (let i = 0; i < check.length; i++) {
        selectedBox.push(parseInt(check[i].getAttribute('value')));
      }
    }
    setSelectedNotif(selectedBox)
  }, [updateSelected, showCheckbox])

  const deleteNotif = (data) => {
    // console.log(data)
    modaldelete.fire({
      showConfirmButton: false,
      html: (
        <>
          <div className="text-center">
            <br />
            <p>Are you sure want to delete the notification?</p>
            <br />
          </div>
          <button
            onClick={() => {
              mutateNotif(actionNotif.deleteNotif({ id: data }))
              setShowCheckbox(false)
              setSelectedNotif(null)
              modaldelete.clickConfirm()
            }}
            className="btn btn-primary text-white mx-4 py-2 px-5 m-2"
          >
            Yes
          </button>
          <button
            onClick={() => modaldelete.clickConfirm()}
            className="btn btn-bg-transparent text-primary mx-4 py-2 px-5 m-2"
          >
            No
          </button>
        </>
      ),
    })
  }

  return (
    <>
      <div class="d-flex flex-column" style={{ height: '100vh' }}>
        <Navigation />
        <div className='px-5 mt-3 d-flex justify-content-between'>
          <div className='d-flex'>
            <img src='/icons/back.svg' alt='back' />
            <p className='ms-3 pt-3'>Homepage</p>
          </div>
          <p className='pt-3'>Notifications</p>
          <p className='pt-3' onClick={() => setShowCheckbox(!showCheckbox)}>Select</p>
        </div>
        <div class="mb-auto px-5 overflow-auto" id='notif'>
          {notif && notif?.notif?.map(item => {
            return (<>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center w-100 pe-2'>
                  <div>
                    <div className='mx-3 p-1 profile-photo'>
                      <img width='36px' height='36px' src={item?.from_photo ? `${process.env.img_url}${item?.from_photo}` : '/images/profile-photo.png'} alt='photo' className='rounded-circle img-profile' />
                    </div>
                  </div>
                  <div className='ms-1 w-100 pt-3'>
                    {item?.type === 'like' ? (
                      <p className='pb-2 m-0'>{`${item?.from_username} ${item?.message}`}</p>
                    ) : (
                      <p className='pb-2 m-0'>{item?.message}</p>
                    )}
                    <p className='text-muted'>{moment(item?.created_at).fromNow()}</p>
                  </div>
                </div>
                <div>
                  {showCheckbox && (
                    <input value={item?.id} type="checkbox" class="form-check-input select-notif" onClick={() => setUpdateSelected(!updateSelected)}></input>
                  )}
                </div>
              </div>
            </>)
          })}
        </div>
        {showCheckbox && (
          <div className='w-100 d-flex justify-content-center mb-3 mt-auto'>
            <Button variant='primary' className='mx-auto px-5 py-3 w-50' style={{ fontSize: '1.1rem' }} onClick={() => deleteNotif(selectedNotif)}>Delete Selected Item</Button>
          </div>
        )}
        <Footer />
      </div>
    </>
  )
}

export default nofication;

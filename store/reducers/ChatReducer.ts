import { Chat } from "@/store/contexts/ChatContext"
import { ChatState } from "@/store/state/chat"
import { ChatActionType } from "@/store/types/Chat"

export const chatReducer = (
  state: ChatState,
  action: { type: ChatActionType; payload: Chat }
) => {
  switch (action.type) {
  case "ADD_MESSAGE":
    return {
      ...state,
      messages: [
        ...state.messages,
        {
          id: action.payload.id,
          sender: action.payload.sender,
          message: action.payload.message,
          time: new Date(Date.now()),
        },
      ],
    }

  default:
    return state
  }
}

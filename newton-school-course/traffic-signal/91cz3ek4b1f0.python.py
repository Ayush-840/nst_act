def traffic_signal_action(signal_color):
    if signal_color== "Red":
        print("Stop")
    elif signal_color =="Yellow":
        print("Ready")
    elif signal_color == "Green":
        print("Go")
    else:
        print("Invalid Color")
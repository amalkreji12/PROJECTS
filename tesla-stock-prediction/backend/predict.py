import sys
import pickle
import numpy as np
import pandas as pd

with open("teslaModel.pkl","rb") as file:
    model = pickle.load(file)
    
openPrice = float(sys.argv[1])
highPrice = float(sys.argv[2])
lowPrice = float(sys.argv[3])
volume = float(sys.argv[4])

input_data = pd.DataFrame([[openPrice,highPrice,lowPrice,volume]], columns= ['Open', 'High', 'Low', 'Volume'])

predicted_closePrice = model.predict(input_data)[0][0]

print(predicted_closePrice)
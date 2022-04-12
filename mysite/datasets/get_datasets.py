#requires 'gdown', 'pandas', and maybe 'wheel' packages
#https://drive.google.com/file/d/1bTsthujW6DNJsaJCJ_l_VlqGc9osMztU/view?usp=sharing

import gdown
import shutil
import os
import pickle as pkl
import pandas as pd

url = 'https://drive.google.com/u/1/uc?id=1bTsthujW6DNJsaJCJ_l_VlqGc9osMztU&export=download'
output = 'archive.zip'
gdown.download(url, output, quiet=False)

dir_path = os.path.dirname(os.path.realpath(__file__))

shutil.unpack_archive(output, dir_path)

with open("ingr_map.pkl", "rb") as f:
    object = pkl.load(f)
    
df = pd.DataFrame(object)
df.to_csv(r'ingr_map.csv')
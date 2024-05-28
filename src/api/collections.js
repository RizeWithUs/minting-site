import { AxiosResponse } from "axios";
import apiService, { UserResponse } from "./api";

export const registerLaunch = async (
  colId,
  state
) => {
  return await apiService.post("api/collection/register_launch", {
    colId: colId,
    state: state,
  });
};

export const getCollectionList = async (
  limit,
  userId,
  networkSymbol
) => {
  return await apiService.post("api/collection/getUserCollections", {
    limit: limit,
    userId: userId,
    connectedNetworkSymbol: networkSymbol,
  });
};

export const getSearchInaCollection = async (
  params
) => {
  return await apiService.post("api/collection/onSearchInACollection", params);
};

export const getCollectionDetails = async (
  colId
) => {
  return await apiService.post("api/collection/detail", {
    id: colId,
  });
};

// used for remove collection and items
export const removeOne = async (id) => {
  return await apiService.post("api/collection/removeOne", {
    _id: id,
  });
};

export const createCollectionApi = async (
  params
) => {
  return await apiService.post("api/collection", params);
};

//used for remove only collection
export const deleteCollectionApi = async (
  id,
  owner
) => {
  return await apiService.post("api/collection/delete", {
    _id: id,
    owner: owner || "",
  });
};

export const updateCollectionApi = async (
  params,
  id
) => {
  return await apiService.put(`api/collection/${id}`, params);
};

export const getOwnersApi = async (id) => {
  return await apiService.post("api/collection/getOwners", {
    colId: id,
  });
};

export const getCollsOnANetworkApi = async (
  param
) => {
  return await apiService.post("api/collection/getCollsOnANetwork", param);
};

export const updateExplicitApi = async (
  userId,
  colId
) => {
  return await apiService.post("api/collection/updateExplicit", {
    userId: userId,
    collId: colId,
  });
};

export const increaseMintedCountApi = async (
  collId,
  addCount,
  mintedIndexs
) => {
  return await apiService.post("api/collection/increaseMintedCount", {
    collId: collId,
    addCount: addCount,
    mintedIndexs: mintedIndexs,
  });
};

export const getRandomIdsForBulkMintApi = async (
  collId,
  mintingCount
) => {
  return await apiService.post("api/collection/getRandomIdsForBulkMint", {
    collId: collId,
    mintingCount: mintingCount,
  });
};

export const registerLaunchApi = async (
  collId
) => {
  return await apiService.post("api/collection/register_launch", {
    colId: collId,
    state: 1,
  });
};

export const updateWithJsonCIDApi = async (
  collId,
  newJsonFolderCID,
  itemCount
) => {
  return await apiService.post("api/collection/updateWithJsonCID", {
    collId: collId,
    jsonFolderCID: newJsonFolderCID,
    totalItemNumberInCID: itemCount,
  });
};

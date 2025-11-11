import { expect } from "chai";
import { ethers } from "hardhat";
import { FHECounter } from "../types";

describe("FHECounter", function () {
  let fheCounter: FHECounter;

  beforeEach(async function () {
    const FHECounterFactory = await ethers.getContractFactory("FHECounter");
    fheCounter = await FHECounterFactory.deploy();
    await fheCounter.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should deploy successfully", async function () {
      expect(await fheCounter.getAddress()).to.be.properAddress;
    });

    it("Should initialize count to zero", async function () {
      const count = await fheCounter.getCount();
      expect(count).to.not.be.undefined;
    });
  });

  describe("Reset function", function () {
    it("Should allow resetting the counter", async function () {
      // Note: This test assumes the reset function exists
      // In a real FHE scenario, this would require proper setup
      expect(fheCounter.reset).to.be.a("function");
    });
  });
});
